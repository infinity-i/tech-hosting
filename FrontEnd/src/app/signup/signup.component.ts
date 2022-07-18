import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    fullname:'',
    email:'',
    phone:'',
    password:''
  }

  onsubmit(){
    alert("Succesfully registered")
  }
  constructor() { }

  ngOnInit(){

}
}