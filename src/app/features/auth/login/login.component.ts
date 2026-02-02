import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEnvelope,
  faLock,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
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
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      // console.log('khadija');
      this._AuthService.login(this.loginForm.value.email!,this.loginForm.value.password!)
      
    }
  }
}
