import {Injectable} from '@angular/core';



@Injectable()



export class RopaService{

    public nombrePrenda:string = 'pantalones vaqueros';
    public coleccion_ropa: Array<string> = ['Camiseta Vaquera',  "Minifalda", "Bermudas"]


    prueba(n){
        return n;
    }

   addRopa(n:string):Array<string>{
    this.coleccion_ropa.push(n);

    return this.getRopa();
   }
   getRopa():Array<string>{
       return this.coleccion_ropa;
   }

   deleteRopa(index:number){
     this.coleccion_ropa.splice(index, 1);
     return this.getRopa();
   }

}