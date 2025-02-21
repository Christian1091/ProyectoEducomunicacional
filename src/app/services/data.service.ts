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

  private datosE = {
      seccionFour: { precioKw: 0, emisionCo2: 0, recomArbol: 0},
  }
  private dataThree: any = {}; // Datos de la sección 3
  private transportType: string = '';
  private combustionOptions: { label: string, value: string, img: string }[] = [];
  private electricOptions: { label: string, value: string, img: string }[] = [];

  constructor() { }


  saveDataOne(datos: {destino: string}) {
    this.datos.seccionOne = datos;
  }
 
  saveDataTwo(datos: {kilometro: number}) {
    this.datos.seccionTwo = datos;
  }

  saveDataThree(datos: {transporte: string}) {
    console.log('datos: $ ' + datos.transporte)
    this.datos.seccionThree = datos;
    this.dataThree=this.datos.seccionThree
  }

  saveDataFour(datos: {precioGasolina:number, emisionCo2:number, recomArbol:number}) {
    this.datos.seccionFour = datos;
  }

  saveDataFourE(datos: {precioKw:number, emisionCo2:number, recomArbol:number}) {
    this.datosE.seccionFour = datos;
  }

  obtenerData() {
    return this.datos;
  }

  obtenerDataE() {
    return this.datosE;
  }

  getKilometro(): number {
    return this.datos.seccionTwo.kilometro;
  }

  getDataThree() {
    console.log('funciona',this.datos.seccionThree);
    return this.datos.seccionThree;
  }

    // Método para guardar el tipo de transporte
    setTransportType(type: string) {
      this.transportType = type;
      console.log(`✅ Transporte guardado en servicio: ${this.transportType}`);
    }
  
    // Método para obtener el tipo de transporte
    getTransportType(): string {
      return this.transportType;
    }

    // Guardar las opciones de transporte
  setOptions(combustion: { label: string, value: string, img: string }[], electric: { label: string, value: string, img: string }[]) {
    this.combustionOptions = combustion;
    this.electricOptions = electric;
  }

  getCombustionOptions(): { label: string, value: string, img: string }[] {
    return this.combustionOptions;
  }

  getElectricOptions(): { label: string, value: string, img: string }[] {
    return this.electricOptions;
  }
  
}
