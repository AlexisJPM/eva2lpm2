import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   email:string='';
  password:string='';

  private servicioAuth = inject(AuthService);
  //inyeccion de router este ayuda a establecer una ruta especifica despues del login
  private router = inject(Router);

  iniciarSesion(){
    this.servicioAuth.login(this.email, this.password).subscribe(success =>{
      if(success){
        alert('Bienvenido al sistema');
        this.router.navigate(['/registro']);
      }else{
        alert('Usuario Incorrecto');
      }
    });
    
  }
  cerrarSesion(){
    this.servicioAuth.logout();
  }

}
