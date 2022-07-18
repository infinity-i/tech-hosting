import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http:HttpClient) { }

  postPass(pwd:any){
    return this.http.post('http://localhost:3000/check', { pwd })
    .subscribe((data)=>console.log(data));
  }
}
