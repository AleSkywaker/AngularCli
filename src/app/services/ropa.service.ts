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
   getRopa(){
       return this.coleccion_ropa;
   }

}