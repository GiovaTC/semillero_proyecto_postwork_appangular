import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pantalla-calculadora',
  templateUrl: './pantalla-calculadora.component.html',
  styleUrls: ['./pantalla-calculadora.component.css']
})
export class PantallaCalculadoraComponent implements OnInit, OnDestroy {
  title = 'Angular_app';
  mostrarSeccion = true; // Directiva condicional

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  historial: number[] = [];

  // Ciclo de vida - OnInit
  ngOnInit() {
    // Ejecutar una función cada 10 segundos
    setInterval(() => {
      this.cambiarImagen();
    }, 10000);
  }

  // Ciclo de vida - OnDestroy
  ngOnDestroy() {
    // Limpieza de recursos (si es necesario)
  }

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

  // Función para cambiar la imagen (llamada cada 10 segundos)
  cambiarImagen() {
    // Lógica para cambiar la imagen (por ejemplo, cambiar la URL de la imagen)
    console.log('Cambiar imagen cada 10 segundos');
  }

  // Función para alternar la visibilidad de una sección
  alternarSeccion() {
    this.mostrarSeccion = !this.mostrarSeccion;
  }
}
