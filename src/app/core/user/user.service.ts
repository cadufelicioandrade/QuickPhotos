import { BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from './../token-service/token.service';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({providedIn:'root'})
export class UserService{

  private userSubject = new BehaviorSubject<User>({name:'Log in!',email:'',id:0});
  private userName: string;

  constructor(private tokenService:TokenService){
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token:string):void{
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser():Observable<User>{
    return this.userSubject.asObservable();
  }

  logout():void{
    this.tokenService.removeToken();
    this.userSubject.next({name:'Log in!',email:'',id:0});
  }

  private decodeAndNotify():void{
    const token = this.tokenService.getToken();
    const jwt_decode = require('jwt-decode');
    const user = jwt_decode(token) as User;
    this.userName = user.name;
    this.userSubject.next(user);
  }

  isLogged():boolean{
    return this.tokenService.hasToken();
  }

  getUserName():string{
    return this.userName;
  }
}
