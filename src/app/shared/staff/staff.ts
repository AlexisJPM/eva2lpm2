import { Component, inject, OnInit, signal } from '@angular/core';
import { StaffService } from '../../services/staff-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff',
  imports: [  CommonModule],
  templateUrl: './staff.html',
  styleUrl: './staff.css',
})
export class Staff implements OnInit {
  private staffService = inject(StaffService);

  // Signal para almacenar los personajes
  personajes = signal<any[]>([]);
  cargando = signal<boolean>(true);

  ngOnInit() {
    this.cargarStaff();
  }

  cargarStaff() {
    this.staffService.getPersonajes().subscribe({
      next: (data) => {
        
        this.personajes.set(data.items || data);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error al conectar con Futurama API', err);
        this.cargando.set(false);
      }
    });
  }

}
