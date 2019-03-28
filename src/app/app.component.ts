import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Users App';

  constructor(public dataService: DataService,
              public authService : AuthService,
              private router : Router) { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAfFucFEfIPj7AxyMT4q7oOwL9vYMpTQdw",
      authDomain: "sg-ng-users-app.firebaseapp.com"
    })
  }

  increase() {
    this.dataService.counter++;
  }

  onLogout(){
    this.authService.logout((error, isLoggedOut)=>{
      if(error) console.log(error);
      if(isLoggedOut){
        this.router.navigate(['/login']);
      }
    })
      
  }

}
