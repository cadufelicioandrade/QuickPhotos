import { Subject } from 'rxjs';
import { TokenService } from './../token-service/token.service';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({providedIn:'root'})
export class UserService{

  private userSubject: Subject<User>;

  constructor(private tokenService:TokenService){
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token:string){
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  private decodeAndNotify(){
    const token = this.tokenService.getToken();
    const jwt_decode = require('jwt-decode');
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

}
