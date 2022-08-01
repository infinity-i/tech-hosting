import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthData } from './auth-data.model';
import {NgToastService} from 'ng-angular-popup'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  signup(){
    console.log("register button hit");
    console.log(this.registerUserData);
     }
     
  registerUserData = new AuthData('','','','','','');
     
  
  constructor(private toast:NgToastService, public auth:AuthService,public router:Router) { }
  
    
    ngOnInit(): void {
      
  }
  onSubmit(){
    // alert("Succesfully registered");
    this.auth.registerUser(this.registerUserData);
    console.log("auth service called");
    this.toast.success({detail:"SUCCESS",summary:'Signup successfull',duration:5000});

    // .subscribe(
    //   (      res: { token: string; }) => {
    //     console.log(res)
    //     localStorage.setItem('token', res.token)
        this.router.navigate(['/login']);
      
    //   ( err: any) => console.log(err)
    // )
  };

 
  


  
}

