import { Component } from '@angular/core';
import {Coche} from './coche'


@Component({
      
      selector: 'coches',
      templateUrl: './coches.component.html'

})

export class CochesComponent {

    public title:string = 'Componente Coches'
    public coche: Coche;
    public coches:Array<Coche>;



    constructor(){
        this.coche = new Coche("", "", "");
        this.coches = [

          new Coche("Renault", "clio", "Rojo"),
          new Coche("Mercedez", "Clase A", "Azul")

        ]


    }
    onSubmit(){

        this.coches.push(this.coche);
    console.log(this.coche);

        this.coche = new Coche("", "", "");
    

    }
    eliminarCoche(index:number){
     this.coches.splice(index, 1);
     
   }



}