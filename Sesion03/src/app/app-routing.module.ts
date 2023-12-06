// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaCalculadoraComponent } from './pantalla-calculadora/pantalla-calculadora.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  //{ path: '', component: PrincipalComponent },
    { path: 'calculadora', component: PantallaCalculadoraComponent },
    { path: 'explorar', component: ExplorarComponent },
  ];
  
  
  @NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes),
      CommonModule],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }