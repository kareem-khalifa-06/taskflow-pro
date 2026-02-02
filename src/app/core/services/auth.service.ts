
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { User } from '../../models/user';

import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  base_url: string = 'http://localhost:3000/';

  constructor(
    private _UsersService: UsersService,
    private _HttpClient: HttpClient,
  ) {}
  register(user: User): Observable<User> {
    return this._HttpClient.post<User>(this.base_url + 'users', user);
  }
  login(
    email: string,
    password: string,
  ): Observable<{ token: string; user: User } | null> {
    return this._UsersService.getAllUsers().pipe(
      map((users) => {
       
        const user = users.find(
          (u) => u.email === email && u.password === password,
        );
        if (!user) return null;

      
        const token = this.generateFakeJwt(user);

      
        localStorage.setItem('accessToken', token);
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log('stored in localstorage');

        return { token, user };
      }),
    );
  }
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
  }
  refreshToken(): string | null {
    const token = this.getToken();
    const user = this.getCurrentUser();
    if (!token || !user) return null;

    const payload = JSON.parse(atob(token.split('.')[1]));
    const now = Math.floor(Date.now() / 1000);
    if (payload.exp - now < 300) {
      const newToken = this.generateFakeJwt(user);
      localStorage.setItem('accessToken', newToken);
      console.log('Token refreshed');
      return newToken;
    }

    return token; 
  }
  private generateFakeJwt(user: User): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(
      JSON.stringify({
        sub: user.id,
        email: user.email,
        role: user.role,
        exp: Math.floor(Date.now() / 1000) + 3600, // expires in 1 hour
      }),
    );
    const signature = btoa('fake-signature'); // JSON Server can’t sign real tokens

    return `${header}.${payload}.${signature}`;
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('currentUser')!);
  }
} 



