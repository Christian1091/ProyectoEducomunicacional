import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-secction-four',
  templateUrl: './secction-four.component.html',
  styleUrl: './secction-four.component.css'
})
export class SecctionFourComponent {
  selectedOption: string = '';

  datos: any;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.datos = this.dataService.obtenerData();
    console.log(this.datos);
  }


  goToNextSeccionFour() {
    this.router.navigateByUrl('/home/secctionFour');
  }

  goBackSeccionTwo() {
    this.router.navigateByUrl('/home/secctionTwo');
  }

  // RECUPERA LOS VALORES DE LA SECCION TRES
  /*ngOnInit() {
    // Acceder a los datos enviados a través del router state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedOption = navigation.extras.state['selectedOption'];
    }
  }*/
}
