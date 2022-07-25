import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup | any;
  
  // user = {
  //   fullName:'',
  //   email:'',
  //   phoneNo:'',
  //   password:'',
  //   repeatPassword:''
  // }
 
  constructor(private authservice:AuthService, private router:Router) { }

  ngOnInit(): void{
    this.signupForm = new FormGroup({
      fullName:new FormControl (null,Validators.required ),
      email:new FormControl (null,[Validators.email,Validators.required]),
      phoneNo:new FormControl (null,Validators.required),
      userType:new FormControl(null,Validators.required),
      password: new FormControl (null, Validators.required),
      repeatPassword: new FormControl(null,Validators.required)
    })  
  }
  onsubmit(signupForm: any){
    console.log("register button hit");
    this.authservice.CreateUser(this.signupForm.value);
    alert('User Registration successfull');
    this.router.navigate(['login']);
  }
}

