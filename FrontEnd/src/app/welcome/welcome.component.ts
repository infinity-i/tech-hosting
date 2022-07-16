import { Component, OnInit } from '@angular/core';
import { fadeL, fadeR, fadeZ } from '../animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    fadeR , fadeL , fadeZ

  ]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
