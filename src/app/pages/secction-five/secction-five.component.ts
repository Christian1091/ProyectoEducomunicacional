import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secction-five',
  templateUrl: './secction-five.component.html',
  styleUrl: './secction-five.component.css'
})
export class SecctionFiveComponent {

  constructor(private router: Router) {}

  goBackSeccionHome() {
    this.router.navigateByUrl('/home');
  }

}
