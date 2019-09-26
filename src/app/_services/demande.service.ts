import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Demande } from '../_models/demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient, private router: Router) { }

  addResource(resPayload: any) {
    return this.http.post<any>(`${environment.apiUrl}/demande`, resPayload);
  }

  getAll() {
    return this.http.get<Demande[]>(`${environment.apiUrl}/demandes`)
  }
}
