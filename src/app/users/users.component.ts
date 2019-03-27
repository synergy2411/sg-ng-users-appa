
import { Component } from '@angular/core';
// import { USER_DATA } from '../model/mocks';
import { IUser } from '../model/user.model';
import { DataService } from './../services/data.service';



@Component({
    selector : "app-users",
    templateUrl : `./users.component.html`,
    // providers: [DataService]
})

export class UsersComponent{
    title : string = "Title of the app";

    users : IUser[];

    constructor(public dataService : DataService){}

    ngOnInit(){
        // this.users = USER_DATA;
        // this.users = this.dataService.getUserData();
        // this.dataService.getHttpUserData()
        // .subscribe(
        //     userdata =>this.users = userdata,
        //     err => console.log(err),
        //     () => console.log("Completed."));

        this.dataService.getHttpClientUserData()
            .subscribe(userdata => this.users = userdata);
    }

    moreInfo(user : IUser){
        alert(`${user.firstName} is working with ${user.company}!!`);
    }

    increase(){
        this.dataService.counter++;
    }
}