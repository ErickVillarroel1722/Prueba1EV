import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  // Definición de las variables con valores iniciales
  a: number = 0;
  b: number = 0;
  c: number = 0;
  resultado: string = '';

  constructor() {}

  // Método para calcular raíces o lo que necesites
  calcularRaices() {
    // Verificación para evitar división por cero
    if (this.a === 0) {
      this.resultado = 'El valor de "a" no puede ser 0.';
      return;
    }

    const discriminante = this.b ** 2 - 4 * this.a * this.c;
    
    if (discriminante > 0) {
      const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
      const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
      this.resultado = `Raíces: ${raiz1.toFixed(2)} y ${raiz2.toFixed(2)}`; // Redondear los resultados
    } else if (discriminante === 0) {
      const raiz = -this.b / (2 * this.a);
      this.resultado = `Raíz única: ${raiz.toFixed(2)}`;
    } else {
      this.resultado = 'No existen raíces reales';
    }
  }
}
