import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  document.body.style.cursor = 'none';
  document.onmousemove = animatecircles;
      function animatecircles(event:any):void{
        var circle = document.createElement("div");
        circle.setAttribute("class","circle");
        document.body.appendChild(circle);
        circle.style.left  = event.clientX+'px';
        circle.style.top  = event.clientY+'px';
        circle.style.transition = "all 0.3s linear 0s";
        
        circle.style.left  = circle.offsetLeft - 20 +'px';
        circle.style.top  = circle.offsetTop - 20 +'px';
        circle.style.width = "80px";
        circle.style.height = "80px";
        
        circle.style.borderWidth = "3px";
        circle.style.opacity = "0";
      } 
}
