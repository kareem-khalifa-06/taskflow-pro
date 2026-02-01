import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { JwtConfig } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  base_url: string = 'http://localhost:3000/';

  constructor(
    private _HttpClient: HttpClient,
   
   ){}
  register(user:User): Observable<any> {
    return this._HttpClient.post(`${this.base_url}/users`,{
      ...user
    })
  }
  login(user:User) {

  }
  logout() {
    localStorage.removeItem('currentUser');
  }
}
