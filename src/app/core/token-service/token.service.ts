import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({providedIn:'root'})
export class TokenService{

  hasToken():boolean{
    //!! converte em boolean, se retorna string vazia/null=false, true para o oposto
    return !!window.localStorage.getItem(KEY);
  }

  setToken(token:string){
    window.localStorage.setItem(KEY,token);
  }

  getToken():string | null{
    return window.localStorage.getItem(KEY);
  }

  removeToken(){
    window.localStorage.removeItem(KEY);
  }

}
