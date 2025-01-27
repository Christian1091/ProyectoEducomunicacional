import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secction-two',
  templateUrl: './secction-two.component.html',
  styleUrl: './secction-two.component.css'
})
export class SecctionTwoComponent {

  constructor(private router: Router) {}

  goToNextSeccion() {
    this.router.navigateByUrl('/home/secctionThree');
  }

}
