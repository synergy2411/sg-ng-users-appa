import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  token: string = null;

  register(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => console.log("[SUCCESS]"))
      .catch(err => console.log(err));
  }

  login(email: string, password: string, cb) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            console.log(token);
            this.token = token;
            cb(null, true);
          })
      })
      .catch(err => {
        console.log(err);
        cb("Unable to logged-in.")
      })
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout(cb) {
    firebase.auth().signOut()
      .then(response => {
        this.token = null;
        cb(null, true);
      })
      .catch(error => cb(error))
  }
}

