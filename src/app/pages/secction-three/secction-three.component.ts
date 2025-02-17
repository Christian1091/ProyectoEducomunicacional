import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secction-three',
  templateUrl: './secction-three.component.html',
  styleUrl: './secction-three.component.css'
})
export class SecctionThreeComponent {
  selectedOption: string = '';

  constructor (private router: Router){}

  goToNextSeccionFour() {
    this.router.navigateByUrl('/home/secctionFour');
  }

  goBackSeccionTwo() {
    this.router.navigateByUrl('/home/secctionTwo');
  }

  // ACCEDER A LOS DATOS DE LA SECCIÓN DOS
  ngOnInit() {
    // Acceder a los datos enviados a través del router state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedOption = navigation.extras.state['selectedOption'];
    }
    //console.log('Valor seleccionado: ' + this.selectedOption);
  }

}
