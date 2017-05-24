import { Component } from '@angular/core';
import { Empleado } from './empleado';
 

@Component({

      selector: 'empleado',
      templateUrl: './empleado.component.html',
      styleUrls:['./empleado.component.css'],

})

export class EmpleadoComponent{
     
     public nombre_empleado = "Componente Empleado"
     public empleado: Empleado;
     public trabajadores:Array<Empleado>;
     public trabajador_externo: boolean;
     public color:string;
     public color_seleccionado:string;
     

    constructor(){
       this.empleado = new Empleado('Alex', 30, 'Informatico', true);
       this.trabajadores = [
           new Empleado('Alex Colombo', 30, 'Informatico', true),
           new Empleado('Ana Lopez', 35, 'Abogado', true),
           new Empleado('Patricia Sanchez', 38, 'Medico', false)];
       this.trabajador_externo = true;  
       this.color= 'cyan'; 
       this.color_seleccionado= '#ccc' 


    }

     ngOnInit(){
       
       console.log(this.empleado);
       console.log(this.trabajadores);
       
     }

     cambiarExterno(valor){
        this.trabajador_externo = valor;

     }
     logColor(){

           console.log(this.color_seleccionado);
           
     }

}