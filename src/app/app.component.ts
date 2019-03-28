import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection : ChangeDetectionStrategy.
})
export class AppComponent implements OnInit {
  title = 'Users App';

  dangerUrl : string = "javascript:alert('Hello')";
  safeUrl : any;

  jsSnippets = "template <script>alert('Hello Angular!')</script>";

  constructor(public dataService: DataService,
              public authService : AuthService,
              private router : Router,
              private cdRef : ChangeDetectorRef,
              private sanitizer : DomSanitizer) {
                this.cdRef. 
                this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(this.dangerUrl);
               }

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
