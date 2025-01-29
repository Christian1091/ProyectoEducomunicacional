import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secction-one',
  templateUrl: './secction-one.component.html',
  styleUrl: './secction-one.component.css'
})
export class SecctionOneComponent {

  constructor(private router: Router) {}

  goToNextSeccionTwo() {
    this.router.navigateByUrl('/home/secctionTwo');
  }

  goBackSeccionHome() {
    this.router.navigateByUrl('/home');
  }

}
