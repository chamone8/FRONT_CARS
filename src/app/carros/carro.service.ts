import { Injectable } from '@angular/core';
import { Carros } from './carros-model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  

  constructor(private http: HttpClient) { }


  create(carro: Carros): Observable<any>{
    return this.http.post(`${environment.api}`,carro);
  }

  update(id:any, carro: Carros): Observable<any>{
    return this.http.put(`${environment.api}/alterar/`.concat(id),carro);
  }
  getAll(): Observable<any>{
    return  this.http.get<Carros[]>(`${environment.api}`);
  }
  delete(id:any){
    return this.http.delete(`${environment.api}/delete/`.concat(id));
  }
}
