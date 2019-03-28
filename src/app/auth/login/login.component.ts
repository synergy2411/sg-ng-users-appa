import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService,
              private router : Router ) { }

  login(loginForm: NgForm) {
    console.log(`Username : ${loginForm.value.username} 
    Password : ${loginForm.value.password}`);

    this.authService.login(
      loginForm.value.username,
      loginForm.value.password, (error, isLoggedIn) => {
        if (error) {
          alert(error);
        } else {
          if(isLoggedIn){
            this.router.navigate(['/users']);
          }
        }
      }
    )
  }

}
