import { Component } from '@angular/core';

import { RopaService } from './../services/ropa.service';


@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  providers :[RopaService]
})
export class HomeComponent{

    public titulo = "Pagina Principal";

    constructor(
      private _ropaService: RopaService
    ){}


   ngOnInit(){
     console.log(this._ropaService.prueba('Camiseta'));
      
   }
}