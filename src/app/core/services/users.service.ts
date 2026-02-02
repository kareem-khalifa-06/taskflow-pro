import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  base_url: string = 'http://localhost:3000/';
  constructor(private _HttpClient: HttpClient) {}
  getAllUsers(): Observable<User[]> {
    return this._HttpClient.get<User[]>(this.base_url+'users')
  }
}
