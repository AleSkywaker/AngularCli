import { Component } from '@angular/core';
import {Coche} from './coche'


@Component({
      
      selector: 'coches',
      templateUrl: './coches.component.html'

})

export class CochesComponent {

    public title:string = 'Componente Coches'

    public coche: Coche;

    constructor(){
        this.coche = new Coche("", null, "");


    }



}