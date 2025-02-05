import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secction-two',
  templateUrl: './secction-two.component.html',
  styleUrl: './secction-two.component.css'
})
export class SecctionTwoComponent {

  selectedOption: string = '';

  constructor(private router: Router) {}

  enableInput: string = 'no'; // Puede ser 'yes' o 'no'

  valorOtro: number = 0;

  resultado : number = 0;

  calcularValor() {
    this.resultado = this.valorOtro * 2;
    console.log( this.resultado);
  }


  goToNextSeccionThree() {
    //this.router.navigateByUrl('/home/secctionThree');
    //this.calcularValor();
  }

  goBackSeccionOne() {
    this.router.navigateByUrl('/home/secctionOne');
  }

  onSubmit() {
    // Aquí obtenemos el valor seleccionado del radio button
    // Ya que estamos usando ngModel, lo podemos acceder directamente
    console.log("Ha seleccionado la opcion ==> " + this.selectedOption);
    const result = parseInt(this.selectedOption) * 2;
    console.log("Calculado IDA - VUELTA ==> " + result);
    // Navegamos a la siguiente sección, pasando los datos por el router
    // De preferencia, utiliza un servicio para almacenar datos globalmente.
    this.router.navigate(['/home/secctionThree'], {
      state: { selectedOption: this.selectedOption },
    });
  }

}
