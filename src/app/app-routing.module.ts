import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SecctionOneComponent } from './pages/secction-one/secction-one.component';
import { SecctionTwoComponent } from './pages/secction-two/secction-two.component';
import { SecctionThreeComponent } from './pages/secction-three/secction-three.component';
import { SecctionFourComponent } from './pages/secction-four/secction-four.component';

const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path:'secctionOne', component: SecctionOneComponent},
  { path:'secctionTwo', component: SecctionTwoComponent},
  { path:'secctionThree', component: SecctionThreeComponent},
  { path:'secctionFour', component: SecctionFourComponent},
  { path:'', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
