import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio01';

  edad1: number = 0;
  edad2: number = 0;
  suma: any;
  promedio: any;

  calcular() {
    this.suma = this.sumar(this.edad1, this.edad2);
    this.promedio = this.promediar(this.edad1, this.edad2);
  }

  sumar(edad1: number, edad2: number) {
    return edad1 + edad2;
  }

  promediar(edad1: number, edad2: number) {
    return (edad1 + edad2) / 2;
  }
}
