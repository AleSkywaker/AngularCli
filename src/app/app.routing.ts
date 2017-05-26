import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


// Importar componentes
import {FrutaComponent} from './fruta/fruta.component';
import {EmpleadoComponent} from './empleados/empleados.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent}, //si esta vacia
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'contacto/:nombre', component: ContactoComponent},
    {path: 'coches', component: CochesComponent},
    {path: '**', component: HomeComponent}, //si falla
];

export const appRoutingProviders:any[] = [];


export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
