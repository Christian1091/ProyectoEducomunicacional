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

  value: number = 0;

  resultado : number = 0;

  //OBTENEMOS LOS VALORES DE LOS INPUTS DE LA SECCIÓN DOS
  onSubmit() {
    // Aquí obtenemos el valor seleccionado del radio button
    // Ya que estamos usando ngModel, lo podemos acceder directamente
    console.log("Ha seleccionado la opcion ==> " + this.selectedOption);

    // Navegamos a la siguiente sección, pasando los datos por el router
    // De preferencia, utiliza un servicio para almacenar datos globalmente.
    this.router.navigate(['/home/secctionThree'], {
      state: { selectedOption: this.selectedOption },
    });
  }

  calcularValor() {
    this.resultado = this.value * 2;
    console.log( this.resultado);
  }


  goToNextSeccionThree() {
    //this.router.navigateByUrl('/home/secctionThree');
    this.calcularValor();
  }

  goBackSeccionOne() {
    this.router.navigateByUrl('/home/secctionOne');
  }

  // ACCEDER A LOS DATOS DE LA SECCIÓN UNO
  ngOnInit() {
    // Acceder a los datos enviados a través del router state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedOption = navigation.extras.state['selectedOption'];
    }
    //console.log('Valor seleccionado: ' + this.selectedOption);
  }


}
