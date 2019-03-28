import { AuthService } from './auth.service';
import { USER_DATA } from './../model/mocks';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { IUser } from '../model/user.model';

@Injectable()
export class DataService{
    constructor(private http : Http,
                private httpClient : HttpClient,
                private authService : AuthService){}
    counter : number = 0;
    getUserData(){
        return USER_DATA;
    }
    getHttpUserData(){
        return this.http.get("./assets/model/user-data.json")
         .map(response => <IUser[]>response.json().userdata); 
    }
    getHttpClientUserData(){
        // return this.httpClient.get<IUser[]>("https://sg-ng-users-app.firebaseio.com/userdata.json?auth=" + this.authService.getToken());
        return this.httpClient.get<IUser[]>("https://sg-ng-users-app.firebaseio.com/userdata.json");
    }
}
