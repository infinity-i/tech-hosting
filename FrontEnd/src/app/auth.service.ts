import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  CreateUser(data: { fullName: string; email: string; phoneNo: string; password: string; repeatPassword: string; }){
    return this.http.post('http://localhost:3000/register',data);
  }
}
 