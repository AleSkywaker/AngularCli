import { Component } from '@angular/core';
import { Coche } from './coche'

import { PeticionesService } from './../services/peticiones.service';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers:[PeticionesService]
})

export class CochesComponent {

    public title: string = 'Componente Coches'
    public coche: Coche;
    public coches: Array<Coche>;
    public articulos;

    constructor(private _peti: PeticionesService) {
        this.coche = new Coche("", "", "");
        this.coches = [
            new Coche("Renault", "clio", "Rojo"),
            new Coche("Mercedez", "Clase A", "Azul")
        ]
    }
ngOnInit(){
this._peti.getArticulos().subscribe(
    result => {
       this.articulos = result; 
      if(!this.articulos){
          console.log('Error en el servidor');  
      }  
    },
    error =>{
        var mensajeError = <any>error ;
        console.log(mensajeError);   
    })
}

    onSubmit() {
        this.coches.push(this.coche);
        this.coche = new Coche("", "", "");
   
    }
    eliminarCoche(index: number) {
        this.coches.splice(index, 1);
    }

    
    

}