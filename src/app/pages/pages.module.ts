import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SecctionTwoComponent } from './secction-two/secction-two.component';
import { SecctionOneComponent } from './secction-one/secction-one.component';
import { SecctionThreeComponent } from './secction-three/secction-three.component';
import { SecctionFourComponent } from './secction-four/secction-four.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    SecctionTwoComponent,
    SecctionOneComponent,
    SecctionThreeComponent,
    SecctionFourComponent,
    PagesComponent,
  ],
  exports: [
    SecctionTwoComponent,
    SecctionOneComponent,
    SecctionThreeComponent,
    SecctionFourComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
