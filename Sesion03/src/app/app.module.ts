import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { AppComponent } from './app.component';
import { PantallaCalculadoraComponent } from './pantalla-calculadora/pantalla-calculadora.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PantallaCalculadoraComponent,
    BarraNavegacionComponent,
    ExplorarComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
