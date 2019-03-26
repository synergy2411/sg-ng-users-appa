import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login(loginForm : NgForm){
    console.log(`Username : ${loginForm.value.username} 
    Password : ${loginForm.value.password}`);
  }

}
