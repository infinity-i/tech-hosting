import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public auth:AuthService,public router: Router) { }
  
  
  loginUserData = {email:'', password:''};
 
  ngOnInit(): void {
  }
  
  token: string | undefined;
  
onlogin() {
    console.log("login button hit");
    console.log(this.loginUserData);
    
    this.auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/'])
      },
      err => {
        console.log(err);
        this.router.navigate(['/'])
      });
  }
}