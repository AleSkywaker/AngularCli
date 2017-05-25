import {Injectable} from '@angular/core';



@Injectable()



export class RopaService{
    
    public nombrePrenda:string = 'pantalones vaqueros';

    prueba(n){
        return n;
    }
}