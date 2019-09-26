import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/environment'; 
import { Rg } from '../_models/rg'; 
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RgService {
  resChanged = new Subject<Rg[]>();
  resources : Rg[]

  constructor(
    private http: HttpClient, private router: Router
  ) { }

  getAll() {
     return this.http.get<Rg[]>(`${environment.apiUrl}/rg`);
  }

  addResource(resPayload: any) {
    return this.http.post<any>(`${environment.apiUrl}/rg`, resPayload);
  }

  deleteResource(index) {
    return this.http.delete(`${environment.apiUrl}/rg/delete/${index}`);
  }

  getSingleResource(index) {
    console.log(index)
    return this.http.get<Rg>(`${environment.apiUrl}/rg/find/${index}`);
  }

}
 