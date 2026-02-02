import {
  AbstractControl,  FormGroup, ValidationErrors,ValidatorFn,} from '@angular/forms';

export const mustMatchValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (!password || !confirmPassword) {
    return null;
  }

  
  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ mustMatch: true });
  } else {
    confirmPassword.setErrors(null);
  }

  return null;
};
