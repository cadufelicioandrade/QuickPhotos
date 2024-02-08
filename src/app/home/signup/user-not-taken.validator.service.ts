import { Observable } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { SignUpService } from './signup.service';
import { Injectable } from '@angular/core';
import { debounceTime, switchMap, map, first } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class UserNotTakenValidatorService{

  constructor(private signUpService:SignUpService){}

  //retorna uma função de validação com acesso ao serviço
  checkUserNameTaken(){

    return (control: AbstractControl) =>
    {
      return control
              .valueChanges
              .pipe(debounceTime(350))
              .pipe(switchMap((userName) => {
                return this.signUpService.checkUserNameTaken(userName);
              }))
              .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
              .pipe(first());
    }
  }

}
