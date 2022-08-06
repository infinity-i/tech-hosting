import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server_address: string = 'api' ;   

  constructor(public http: HttpClient) { }

registerUser(registerUserData: any) {
  console.log("auth file executed");
  return this.http.post(`${this.server_address}/register`,{ registerUserData }).subscribe(data =>{console.log(data)});
}

loginUser(loginUserData: any) {
  return this.http.post<any>(`${this.server_address}/login`,{loginUserData});
}

adminLogin(loginUserData: any) {
  return this.http.post<any>(`${this.server_address}/admin/login`,{loginUserData});
}

getToken() {
    return localStorage.getItem('token')
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  
  
}









