import { Component } from '@angular/core';


@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})

export class FrutaComponent{
   public nombre_fruta  = 'Fruta';
   public listado_frutas = 'melon, manzana, uvas';


  public nombre: string = 'Alex';
  public edad: number = 30;
  public mayorEdad: boolean = true;
  public trabajos: Array<any> = ['Back End', 'Front End', 88]

  constructor(){

    console.log(this.trabajos);
    
  }


}
