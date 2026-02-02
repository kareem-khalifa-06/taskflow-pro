import { ParsingOptions } from './../../../../node_modules/chart.js/dist/types/index.d';
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

  constructor(private _HttpClient: HttpClient) {}

  login(email: string, password: string)  {
    this._HttpClient.get(this.base_url+'users').subscribe({
      next:(res)=>{
        const users= res;
       console.log(users)
      }
    })
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
}
