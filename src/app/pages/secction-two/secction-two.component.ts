import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-secction-two',
  templateUrl: './secction-two.component.html',
  styleUrl: './secction-two.component.css'
})
export class SecctionTwoComponent {

  kilometros = [
    { id: '01', name: 'kilometros', value: 1, label: '0 < 1 km' },
    { id: '02', name: 'kilometros', value: 2, label: '1 > 2 km' },
    { id: '03', name: 'kilometros', value: 4, label: '2 > 4 km' },
    { id: '04', name: 'kilometros', value: 6, label: '4 > 6 km' },
    { id: '05', name: 'kilometros', value: 8, label: '6 > 8 km' },
    { id: '06', name: 'kilometros', value: 10, label: '8 > 10 km' },
    { id: '07', name: 'kilometros', value: 0, label: 'Otro' }
  ];

  formulario: FormGroup;
  MensajeNotificacion = '';
  constructor(
    private router: Router,
    private dataService: DataService,
    private fb: FormBuilder) {
    this.formulario = this.fb.group({
      seleccionKM: new FormControl(''),
      otroValor: new FormControl('')
    });
  }

  onTouched() {
    this.formulario.get('seleccionKM')?.markAsTouched();
  }

  getKilometrosSeleccionados(): number {
    const kmSeleccionado = this.formulario.get('seleccionKM')?.value;
    const kmOtroValor = this.formulario.get('otroValor')?.value;
    if (kmSeleccionado === 0 && kmOtroValor) {
      return kmOtroValor;
    }
    return kmSeleccionado;
  }

  enviar() {
    if(this.getKilometrosSeleccionados() == null || this.getKilometrosSeleccionados() == 0) {
      this.MensajeNotificacion = 'Debe seleccionar o ingresar una opción.'
      return;
    }
    this.dataService.saveDataTwo({kilometro: this.getKilometrosSeleccionados() * 2});
    this.router.navigateByUrl('/home/secctionThree');
  }
}
