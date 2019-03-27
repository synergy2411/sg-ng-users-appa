import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  password = new FormControl('', [
    Validators.required,
    this.hasExclamation
  ]);
  confirm = new FormControl('', [
    Validators.required,
    this.hasExclamation,
    this.duplicatePassword
  ]);
  registerForm: FormGroup;

  duplicatePassword(input) {
    if (input.parent && input.parent.controls) {
      const duplicatePass = input.parent.controls['password'].value === input.value;
      return duplicatePass ? null : { 'duplicatePassword': true }
    }
  }
  hasExclamation(input: FormControl) {
    const hasExclMark = input.value.indexOf('!') >= 0;
    return hasExclMark ? null : { 'needExclamation': true };
  }

  constructor(private fb: FormBuilder,
              private authService : AuthService) {
    this.registerForm = this.fb.group({
      username: this.username,
      password: this.password,
      confirm: this.confirm
    })
  }

  register() {
    console.log(`Username : ${this.registerForm.value.username}
                 Password : ${this.registerForm.value.password} `);
    this.authService.register(
      this.registerForm.value.username,
      this.registerForm.value.password
      );
  }
}
