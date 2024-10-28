import { Component } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  fechaInicio: string;
  fechaFin: string; 
  diferenciaDias: number | null = null; 

  constructor() {
    this.fechaInicio = '';
    this.fechaFin = '';
  }

  calcularDiferencia() {
    const inicio = new Date(this.fechaInicio);
    const fin = new Date(this.fechaFin);


    if (!isNaN(inicio.getTime()) && !isNaN(fin.getTime())) {
      const diferenciaMilisegundos = fin.getTime() - inicio.getTime();
      this.diferenciaDias = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24)); 
    } else {
      this.diferenciaDias = null; 
    }
  }
}
