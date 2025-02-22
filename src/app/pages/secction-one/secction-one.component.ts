import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-secction-one',
  templateUrl: './secction-one.component.html',
  styleUrl: './secction-one.component.css'
})
export class SecctionOneComponent {

  selectedOptionDestino: string = '';  // Almacena el valor seleccionado

  constructor(private router: Router, private dataService: DataService) {}

  enviar() {
    if(this.selectedOptionDestino !==null ) {
      this.dataService.saveDataOne({destino: this.selectedOptionDestino});
      this.router.navigateByUrl('/home/secctionTwo');
    }
  }

  /*onSubmit() {
    // Aquí obtenemos el valor seleccionado del radio button
    // Ya que estamos usando ngModel, lo podemos acceder directamente
    console.log("Ha seleccionado la opcion ==> " + this.selectedOption);

    // Navegamos a la siguiente sección, pasando los datos por el router
    // De preferencia, utiliza un servicio para almacenar datos globalmente.
    this.router.navigate(['/home/secctionTwo'], {
      state: { selectedOption: this.selectedOption },
    });
  }*/

  goToNextSeccionTwo() {
    this.router.navigateByUrl('/home/secctionTwo');
  }

  goBackSeccionHome() {
    this.router.navigateByUrl('/home');
  }

}
