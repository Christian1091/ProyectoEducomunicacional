import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-secction-two',
  templateUrl: './secction-two.component.html',
  styleUrl: './secction-two.component.css'
})
export class SecctionTwoComponent {

  selectedOptionKm: number = 0;
  resultKm: number = 0;

  constructor(private router: Router, private dataService: DataService) {}

  enableInput: string = 'no'; // Puede ser 'yes' o 'no'

  valorOtro: number = 0;

  resultado : number = 0;

  enviar() {
    if(this.selectedOptionKm !== null) {
      this.resultKm = this.selectedOptionKm * 2;
      this.dataService.saveDataTwo({kilometro: this.resultKm});
      this.router.navigateByUrl('/home/secctionThree');
    }
  }


  goToNextSeccionThree() {
    this.router.navigateByUrl('/home/secctionThree');
    //this.calcularValor();
  }

  goBackSeccionOne() {
    this.router.navigateByUrl('/home/secctionOne');
  }

  /*onSubmit() {
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
  }*/

}
