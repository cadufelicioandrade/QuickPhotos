import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})
export class HeaderComponent implements OnInit{

  user$:Observable<User>;

  constructor(
    private userService:UserService,
    private router:Router
    ){
    this.user$ = this.userService.getUser();
  }

  ngOnInit(): void {

  }

  logout(){
    this.userService.logout();
    this.router.navigate(['']);
  }
}
