import { Component } from '@angular/core';



@Component({
    selector:'plantillas',
    templateUrl: './plantillas.component.html'
})

export class PlantillasComponent {

  public titulo:string;
  public administrador:boolean = true;

      
 constructor(){
   this.titulo = "Plantilla ngTempleate en Angular";
   
 }
   
   cambiar(value){
   this.administrador=value;
   }

}