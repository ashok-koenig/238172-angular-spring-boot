import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Token {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(){
    if(this.getToken()){
      this.isLoggedIn.next(true)
    }
  }

  setToken(token: string){
    localStorage.setItem('jwt-token', token)
    this.isLoggedIn.next(true)
  }
  getToken(){
    return localStorage.getItem('jwt-token')
  }
  removeToken(){
    localStorage.removeItem('jwt-token')
    this.isLoggedIn.next(false)
  }
}
