import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RgAlimentaire } from '../_models/rg_alimentaire';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RgAlimentaireService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<RgAlimentaire[]>(`${environment.apiUrl}/rg/alimentaire`)
  }

  getDetailRgAlimentaire(id: number) {
    return this.http.get<RgAlimentaire>(`${environment.apiUrl}/rg/alimentaire/${id}`); 
  }
}
