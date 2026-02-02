import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock, faRegistered, faSignInAlt, faUser, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { mustMatchValidator } from './must-match-validator';
import { UsersService } from '../../../core/services/users.service';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(
    private _UsersService: UsersService,
    private _AuthService: AuthService,
    private _Router: Router,
  ) {}
 
  faUserAstronaut = faUserAstronaut;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faLock = faLock;
  registerFrom =new FormGroup(
    {
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])(?=\\S+$).{8,}$',
        ),
      ]),
      confirmPassword: new FormControl(''),
      lastName: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    },
    {
      validators: mustMatchValidator,
    },
  );
  get email() {
    return this.registerFrom.get('email');
  }
  get password() {
    return this.registerFrom.get('password');
  }
  get firstName() {
    return this.registerFrom.get('firstName');
  }
  get lastName() {
    return this.registerFrom.get('lastName');
  }
  get confirmPassword() {
    return this.registerFrom.get('confirmPassword');
  }
  get role() {
    return this.registerFrom.get('role');
  }
  onSubmit() {
    if (this.registerFrom.valid&&this.registerFrom.value) {
      console.log(this.registerFrom.value)
     const user: User = {
       id: crypto.randomUUID(),
       email: this.registerFrom.value.email!,
       password: this.registerFrom.value.password!,
       firstName: this.registerFrom.value.firstName!,
       lastName: this.registerFrom.value.lastName!,
       role: this.registerFrom.value.role as 'admin' | 'manager' | 'member',
       avatar: `/uploads/avatars/${this.registerFrom.value.role!}.png`,
       createdAt: new Date(),
       updatedAt: new Date(),
     };
      this._AuthService.register(user).subscribe()
      this._Router.navigate(['/login'])
    }
  }
}
