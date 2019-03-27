import { USER_DATA } from './../model/mocks';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { IUser } from '../model/user.model';

@Injectable()
export class DataService{
    constructor(private http : Http,
                private httpClient : HttpClient){}
    counter : number = 0;
    getUserData(){
        return USER_DATA;
    }
    getHttpUserData(){
        return this.http.get("./assets/model/user-data.json")
         .map(response => <IUser[]>response.json().userdata); 
    }
    getHttpClientUserData(){
        return this.httpClient.get<IUser[]>("https://sg-ng-users-app.firebaseio.com/userdata.json")
    }
}

// npm i firebase --save
// npm i rxjs-compat --save