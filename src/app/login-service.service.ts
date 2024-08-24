import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private readonly http:HttpClient) { }
  login(email:string,password:string): Observable<any>{
    return this.http.post("http://localhost:9000/api/personas/login",{
      username:email,password
    })
  }
}
