import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  token : string = null;

  register(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => console.log("[SUCCESS]"))
      .catch(err => console.log(err));
  }

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log("[LOGGED IN]");
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            console.log(token);
            this.token = token;
          })
      })
      .catch(err => console.log(err))
  }

}
