import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-secction-four',
  templateUrl: './secction-four.component.html',
  styleUrl: './secction-four.component.css'
})
export class SecctionFourComponent {
  selectedOption: string = '';

  constructor(private router: Router) {}

  // RECUPERA LOS VALORES DE LA SECCION TRES
  ngOnInit() {
    // Acceder a los datos enviados a través del router state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedOption = navigation.extras.state['selectedOption'];
    }
  }
}
