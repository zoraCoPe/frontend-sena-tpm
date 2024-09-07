import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private readonly http:HttpClient) { }
  obtenerPersonas(): Observable<{name:string,apellido:string,email:string,telefono:string}[]>{
    return this.http.get("http://localhost:9000/api/personas",{
      
    }) as Observable<any>
  }
}
