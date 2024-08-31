import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
    registerForm!: FormGroup;
    constructor(
      private readonly iRegisterService: RegisterService,
      private readonly router:Router
    ){}
    ngOnInit(): void {
      this.registerForm = new FormGroup({
        firtsname: new FormControl("",[Validators.required]),
        lastname: new FormControl("",[Validators.required]),
        email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("",[Validators.required,Validators.minLength(5)]),
      adress: new FormControl("",[Validators.required]),
      phoneNumber: new FormControl("",[Validators.required]),
      })
    }
    register(){
      if(!this.registerForm.valid){
        debugger
        alert("formulario incompleto");
        return;
      }
      this.iRegisterService.registrate(
        this.registerForm.value.email,
        this.registerForm.value.password,
        this.registerForm.value.firtsname,
        this.registerForm.value.lastname,
        this.registerForm.value.adress,
        this.registerForm.value.phoneNumber,
                              ).subscribe(
        (oResponse)=>{
          if(oResponse.id){
            this.router.navigate(["/home"])
          } else {
            alert("ha ocurrido un error intentelo mas tarde")
          }
        },
        (oError)=>{
          alert("ha ocurrido un error en el sistema")
          console.log(oError)
        }
      )
    }
}

