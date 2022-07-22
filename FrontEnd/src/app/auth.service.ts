import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private _signupUrl = "http://localhost:3000/register";
  // private _loginUrl = "http://localhost:3000/login";

constructor(private http: HttpClient) { }

registerUser(registerUserData: any) {
  console.log("auth file executed");
  return this.http.post('http://localhost:3000/register',{ "user":registerUserData}).subscribe(data =>{console.log(data)});

}

loginUser(loginUserData: any) {
  return this.http.post('http://localhost:3000/login',loginUserData);
}

  // getToken() {
  //   throw new Error('Method not implemented');
  // }
  // loginUser(loginUserData:any)
  // {
  //   return this.http.post<any>(this._loginUrl, loginUserData)
  // }
  ngOnInit(): void {
    
  }
}




// loggedIn(){
//   return !!localStorage.getItem('token')
// }




