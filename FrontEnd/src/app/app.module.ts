import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { WelcomeComponent } from './welcome/welcome.component';
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent
=======
    WelcomeComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
