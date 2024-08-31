import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private readonly http:HttpClient) { }
  registrate(email:string,password:string,name:string,apellido:string,direccion:string,telefono:string): Observable<any>{
    return this.http.post("http://localhost:9000/api/personas",{
      email,password,name,apellido,direccion,telefono,id:new Date().getTime()
    })
  }
}
