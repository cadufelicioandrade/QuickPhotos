import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { TokenService } from '../token-service/token.service';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient,
    private tokenService:TokenService
    ) { }

  authenticate(userName:string, password:string):Observable<Object>{
    //Passar o { observe: 'response'} no terceiro parâmetro para poder acessar
    //tudo que retorna na resposta por ex. headers
    return this.http
    .post(
      API_URL + '/user/login',
      {userName, password},
      { observe: 'response'}
    )
    .pipe(tap(response =>{
        const token = response.headers.get('x-access-token') as string;
        this.tokenService.setToken(token);
    }));
  }

}
