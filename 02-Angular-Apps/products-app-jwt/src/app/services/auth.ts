import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from './token';
import { User } from '../models/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  apiUrl = "http://localhost:8080/auth/"
  constructor(private http: HttpClient, private token: Token){}

  register(user: User){
    return this.http.post<any>(this.apiUrl+"register", user)
  }
  
  login(user: User){
    return this.http.post<any>(this.apiUrl+"login", user).pipe(map(response => {
      if(response.token){
        this.token.setToken(response.token)
      }
      return response
    }))
  }

  logout(){
    this.token.removeToken();
  }
}
