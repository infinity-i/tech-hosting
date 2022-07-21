import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    fullName:'',
    email:'',
    phoneNo:'',
    password:'',
    repeatPassword:''
  }
 
  constructor(private authservice:AuthService, private router:Router) { }

  ngOnInit(): void{

  }
  onsubmit(){
    console.log("register button hit");
    this.authservice.CreateUser(this.user);
    alert('User Registration successfull');
    this.router.navigate(['login']);
  }
}

