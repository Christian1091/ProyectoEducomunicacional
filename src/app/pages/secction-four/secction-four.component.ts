import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-secction-four',
  templateUrl: './secction-four.component.html',
  styleUrl: './secction-four.component.css'
})
export class SecctionFourComponent {

  mostrarComparacion = false; // Controla la visibilidad de la segunda columna

  productos = [
    { img: 'assets/icons/money.png', titulo: 'Producto 1', valor: '$100' },
    { img: 'assets/icons/electric.png', titulo: 'Producto 2', valor: '$200' },
    { img: 'assets/icons/co2.png', titulo: 'Producto 3', valor: '$300' },
    { img: 'assets/icons/arboles.png', titulo: 'Producto 4', valor: '$400' }
  ];

  productosComparacion = [
    { img: 'assets/icons/money.png', titulo: 'Producto 1', valor: '$100' },
    { img: 'assets/icons/electric.png', titulo: 'Producto 2', valor: '$200' },
    { img: 'assets/icons/co2.png', titulo: 'Producto 3', valor: '$300' },
    { img: 'assets/icons/arboles.png', titulo: 'Producto 4', valor: '$400' }
  ];

  toggleComparacion() {
    this.mostrarComparacion = !this.mostrarComparacion;
  }
}
