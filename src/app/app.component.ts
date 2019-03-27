import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public dataService: DataService) { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAfFucFEfIPj7AxyMT4q7oOwL9vYMpTQdw",
      authDomain: "sg-ng-users-app.firebaseapp.com"
    })
  }

  increase() {
    this.dataService.counter++;
  }

}
