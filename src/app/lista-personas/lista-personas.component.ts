import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { PersonasService } from '../personas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-personas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.css',
  schemas:[NO_ERRORS_SCHEMA]
})
export class ListaPersonasComponent {
public oPersonas:{name:string,apellido:string,email:string,telefono:string}[]=[];
constructor(
  private readonly iPersonasService:PersonasService
){
this.obtenerPersonas()
}

obtenerPersonas(){
this.iPersonasService.obtenerPersonas().subscribe(
  (oResponse)=>{
    this.oPersonas =oResponse
  },
  (oError)=>{
    alert("ha ocurrido un error en el sistema")
    console.log(oError)
  } 
)
}
}
