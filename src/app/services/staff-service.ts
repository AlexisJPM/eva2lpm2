import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StaffService {

  private http = inject(HttpClient);
  private apiUrl = 'https://futuramaapi.com/api/characters'; // URL base de la API

  getPersonajes(): Observable<any> {
    // Retorna la lista de personajes
    return this.http.get(this.apiUrl);
  }
  
}
