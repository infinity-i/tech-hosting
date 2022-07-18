import { Component, OnInit } from '@angular/core';
import { downA, fadeL, fadeR, fadeZ, imgani, imgani1 } from '../animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    fadeR , fadeL , fadeZ , downA , imgani , imgani1

  ]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
