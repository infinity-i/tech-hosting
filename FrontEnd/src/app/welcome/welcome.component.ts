import { Component, OnInit } from '@angular/core';
import { downA, fadeL, fadeR, fadeZ, imgani, imgani1, letter1, letter2, letter3, letter4 } from '../animations';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    fadeR , fadeL , fadeZ , downA , imgani , imgani1, letter1, letter2,
    letter3, letter4

  ]
})
export class WelcomeComponent implements OnInit {

  constructor(public auth:AuthService) { }
   
    
  ngOnInit(): void {
  }

}
