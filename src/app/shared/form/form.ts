import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario-service';
import { AuthService } from '../../services/auth-service';
import { Usuario } from '../../models/usuarios';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {

  private servicioUsuario = inject(UsuarioService);
  public servicioAuth = inject(AuthService);

  // Lista de usuarios reactiva
  listaUsuarios = signal<Usuario[]>([]);

  // Objeto vinculado al formulario
  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: '',
    password: '',
    rol: 'EMPLEADO'
  };

  ngOnInit() {
    this.obtenerUsuarios(); 
  }

  obtenerUsuarios() {
    this.servicioUsuario.getUsuarios().subscribe(datosUsuarios => {
      this.listaUsuarios.set(datosUsuarios);
    });
  }

  // Método simplificado: Solo guarda (POST)
  guardarUsuario() {
    this.servicioUsuario.postUsuarios(this.nuevoUsuario).subscribe(() => {
      this.obtenerUsuarios(); 
      this.resetear();      
    });
  }

  resetear() {
    this.nuevoUsuario = { 
      name: '', 
      email: '', 
      phone: '', 
      password: '', 
      rol: 'EMPLEADO' 
    };
  }
}