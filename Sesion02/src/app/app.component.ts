// app.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_app';

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  historial: number[] = [];

  sumar() {
    this.resultado = this.num1 + this.num2;
  }

  restar() {
    this.resultado = this.num1 - this.num2;
  }

  dividir() {
    if (this.num2 !== 0) {
      this.resultado = this.num1 / this.num2;
    } else {
      console.error('No es posible dividir entre cero.');
      this.resultado = NaN;
    }
  }

  guardarResultado() {
    this.historial.push(this.resultado);
  }

  recorrerHistorial() {
    console.log('Historial de resultados:');
    for (const resultado of this.historial) {
      console.log(resultado);
    }
  }
}
