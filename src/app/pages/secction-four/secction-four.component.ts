import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-secction-four',
  templateUrl: './secction-four.component.html',
  styleUrl: './secction-four.component.css'
})
export class SecctionFourComponent implements OnInit {

  mostrarComparacion = false; // Controla la visibilidad de la segunda columna
  opcionSeleccionada: string = '';
  opcionesComparacion: { label: string, value: string, img: string }[] = [];

  toggleComparacion() {
    this.mostrarComparacion = !this.mostrarComparacion;

    if (this.mostrarComparacion) {
      // Solo cuando el usuario presiona "Comparar", cargamos las opciones
      const transporteSeleccionado = this.dataService.getTransportType();
      const combustionOptions = this.dataService.getCombustionOptions();
      const electricOptions = this.dataService.getElectricOptions();

      console.log(`🚗 Transporte obtenido en Sección 4: ${transporteSeleccionado}`);
      console.log('🔥 Opciones de combustión obtenidas:', combustionOptions);
      console.log('⚡ Opciones eléctricas obtenidas:', electricOptions);

      // Determinar las opciones que mostrar según el transporte seleccionado
      if (transporteSeleccionado === 'Combustión') {
        this.opcionesComparacion = electricOptions;  // Mostrar opciones eléctricas
      } else if (transporteSeleccionado === 'Eléctrico') {
        this.opcionesComparacion = combustionOptions; // Mostrar opciones de combustión
      }
    } else {
      // Si se oculta el ComboBox, resetear todo
      this.opcionesComparacion = [];
      this.opcionSeleccionada = '';
    }
  }

  constructor(
    private router: Router,
    private dataService: DataService){}


  datos: any;
  datosE: any;
  tipoTransporte:any;


  ngOnInit() {
    this.datos = this.dataService.obtenerData();
    console.log(this.datos);
    this.datosE = this.dataService.obtenerDataE();
    this.tipoTransporte = this.dataService.getTransportType();
    console.log('transporte tipo compa',this.tipoTransporte);
  }

  onSeleccionCambio() {
    console.log("Opción seleccionada:", this.opcionSeleccionada);
    // Mostrar la segunda columna solo después de seleccionar una opción
    if (this.opcionSeleccionada) {
      this.mostrarComparacion = true;
    }
  }
}
