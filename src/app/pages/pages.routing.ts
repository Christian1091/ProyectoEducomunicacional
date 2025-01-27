import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { SecctionOneComponent } from './secction-one/secction-one.component';
import { SecctionTwoComponent } from './secction-two/secction-two.component';
import { SecctionThreeComponent } from './secction-three/secction-three.component';
import { SecctionFourComponent } from './secction-four/secction-four.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',
    component: PagesComponent,
    children: [
      { path:'', component: HomeComponent},
      { path:'secctionOne', component: SecctionOneComponent},
      { path:'secctionTwo', component: SecctionTwoComponent},
      { path:'secctionThree', component: SecctionThreeComponent},
      { path:'secctionFour', component: SecctionFourComponent},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule{}
