import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})

export class FrutaComponent{
  public nombre_fruta = 'Fruta';
  public listado_frutas = 'melon, manzana, uvas';

  public nombre: string;
  public edad: number;
  public mayorEdad: boolean;
  public trabajos: Array<any>;
  comodin: any;

  constructor() {
    this.nombre = "Alex";
    this.edad = 30;
    this.trabajos = ['Back End', 'Front End', 44];
    this.mayorEdad = true;
    
  }
  ngOnInit(){
   this.holaMundo(this.nombre);
  }

  holaMundo(nombre){
    console.log('Hola ' + nombre );
  }

}
