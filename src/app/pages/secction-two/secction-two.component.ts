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
    this.calcularValor();
  }

  goBackSeccionOne() {
    this.router.navigateByUrl('/home/secctionOne');
  }

  ngOnInit() {
    // Acceder a los datos enviados a través del router state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedOption = navigation.extras.state['selectedOption'];
    }
    //console.log('Valor seleccionado: ' + this.selectedOption);
  }

}
