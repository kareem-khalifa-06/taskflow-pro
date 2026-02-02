import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEnvelope,
  faEye,
  faLock,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule, RouterOutlet, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
   showPassword=false
  faEye=faEye
  faEnvelope = faEnvelope;
  faLock = faLock;
  faSignInAlt = faSignInAlt;

  constructor(
    private _FormBuilder: FormBuilder,
    private _AuthService: AuthService,
  ) {}

  loginForm = this._FormBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])(?=\\S+$).{8,}$',
        ),
      ],
    ],
  });

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('khadija');
      this._AuthService.login(this.loginForm.value.email!,this.loginForm.value.password!).subscribe({
        
      });
      
    }
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  toggleShowPassword(){
    this.showPassword=!this.showPassword;
  }
 
}
