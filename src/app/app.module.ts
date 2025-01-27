import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecctionTwoComponent } from './pages/secction-two/secction-two.component';
import { SecctionOneComponent } from './pages/secction-one/secction-one.component';
import { SecctionThreeComponent } from './pages/secction-three/secction-three.component';
import { SecctionFourComponent } from './pages/secction-four/secction-four.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SecctionTwoComponent,
    SecctionOneComponent,
    SecctionThreeComponent,
    SecctionFourComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
