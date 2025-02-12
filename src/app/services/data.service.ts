import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private datos = {
    seccionOne: { destino:''},
    seccionTwo: { kilometro: 0},
    seccionThree: { transporte: ''},
    seccionFour: { precioGasolina: 0, emisionCo2: 0, recomArbol: 0},
  }

  constructor() { }


  saveDataOne(datos: {destino: string}) {
    this.datos.seccionOne = datos;
  }

  saveDataTwo(datos: {kilometro: number}) {
    this.datos.seccionTwo = datos;
  }

  saveDataThree(datos: {transporte: string}) {
    this.datos.seccionThree = datos;
  }

  saveDataFour(datos: {precioGasolina:number, emisionCo2:number, recomArbol:number}) {
    this.datos.seccionFour = datos;
  }

  obtenerData() {
    return this.datos;
  }

  getKilometro(): number {
    return this.datos.seccionTwo.kilometro;
  }
}
