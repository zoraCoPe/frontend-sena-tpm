import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
  })
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private readonly iLoginService:LoginServiceService,
    private readonly router:Router
  ){}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("",[Validators.required,Validators.minLength(5)])
    })
  }
  onLogin():void{ 
    
    if(!this.loginForm.valid){
      alert("datos ingresados no son validos")
      return;
    }
    
    this.iLoginService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(
      (oResponse)=>{
        if(oResponse.ok){
          this.router.navigate(["/home"])
        } else {
          alert("el usuario ingresado no es valido")
        }
      },
      (oError)=>{
        alert("ha ocurrido un error en el sistema")
        console.log(oError)
      }
    )
  }
  
}
