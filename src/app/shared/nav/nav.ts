import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

  private servicioAuth = inject(AuthService);

  cerrarSesion(){
    this.servicioAuth.logout();
  }

}
