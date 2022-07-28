import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';





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
    if(this.loginUserData.email==null||this.loginUserData.password==null){
      console.log("values missing");
      this.router.navigate(['login'])
    }
    else{
      this.auth.loginUser(this.loginUserData)
        .subscribe((res: { token: string; }) => {
            localStorage.setItem('token', res.token)
            this.router.navigate(['/home'])
          },
          (     err: any) => {
            console.log(err);
            this.router.navigate(['signup'])
          });
    }  
  }
}