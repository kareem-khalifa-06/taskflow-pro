import { faEye, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from '../../../core/services/auth.service';
import {  RouterLink } from '@angular/router';
import { mustMatchValidator } from '../register/must-match-validator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPasswordcomponent.css'],
})
export class ForgotPasswordComponent {
  showPassword = false;
  constructor(
    private _FormBuilder: FormBuilder,
    private _AuthService: AuthService,
  ) {}
  faLock = faLock;
  faEye = faEye;
  faEnvelope=faEnvelope;
  forgotPasswordForm = this._FormBuilder.group(
    {
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])(?=\\S+$).{8,}$',
          ),
        ],
      ],
      email: [
        '',
        [
          Validators.required,Validators.email,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
          ),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: mustMatchValidator },
  );
  get password() {
    return this.forgotPasswordForm.get('password');
  }
  get confirmPassword() {
    return this.forgotPasswordForm.get('confirmPassword');
  }
  get email() {
    return this.forgotPasswordForm.get('email');
  }
  onSubmit() {
    if(this.forgotPasswordForm.valid)
    this._AuthService.changePassword(this.forgotPasswordForm.value.email!,this.forgotPasswordForm.value.password!);
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
