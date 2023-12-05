import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PantallaCalculadoraComponent } from './pantalla-calculadora/pantalla-calculadora.component'; 
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    PantallaCalculadoraComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
