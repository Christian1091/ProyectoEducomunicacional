import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secction-two',
  templateUrl: './secction-two.component.html',
  styleUrl: './secction-two.component.css'
})
export class SecctionTwoComponent {

  constructor(private router: Router) {}

  enableInput: string = 'no'; // Puede ser 'yes' o 'no'

  goToNextSeccionThree() {
    this.router.navigateByUrl('/home/secctionThree');
  }

  goBackSeccionOne() {
    this.router.navigateByUrl('/home/secctionOne');
  }

}
