import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-secction-three',
  templateUrl: './secction-three.component.html',
  styleUrl: './secction-three.component.css'
})
export class SecctionThreeComponent {

  selectedOptionTrans: string = '';

  litroAuto: number = 4;
  precioLitro: number = 11.48;
  tiempo: number = 48;
  gaso: number= 0;
  co2: string='128';
  numArb: string='189';

  constructor (private router: Router, private dataService: DataService){}

  calcularCombustible() {

  }

  enviar() {
    if(this.selectedOptionTrans !== null) {
      this.dataService.saveDataThree({transporte: this.selectedOptionTrans});
      this.gaso = this.precioLitro * this.tiempo;
      this.dataService.saveDataFour({precioGasolina: this.gaso, resultado2:this.co2, resultado3: this.numArb});

      this.router.navigateByUrl('/home/secctionFour');
    }
  }



  goToNextSeccionFour() {
    this.router.navigateByUrl('/home/secctionFour');
  }

  goBackSeccionTwo() {
    this.router.navigateByUrl('/home/secctionTwo');
  }
  /*onSubmit() {
    // Aquí obtenemos el valor seleccionado del radio button
    // Ya que estamos usando ngModel, lo podemos acceder directamente
    console.log("Ha seleccionado la opcion ==> " + this.selectedOption);
    // Navegamos a la siguiente sección, pasando los datos por el router
    // De preferencia, utiliza un servicio para almacenar datos globalmente.
    this.router.navigate(['/home/secctionFour'], {
      state: { selectedOption: this.selectedOption },
    });
  }*/

  // RECUPERA VALORES DE LA SECCION DOS
  /*ngOnInit() {
    // Acceder a los datos enviados a través del router state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedOption = navigation.extras.state['selectedOption'];
    }
    //console.log('Valor seleccionado: ' + this.selectedOption);
  }*/

}
