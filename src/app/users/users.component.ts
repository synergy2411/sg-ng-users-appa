import { Component } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { IUser } from '../model/user.model';

@Component({
    selector : "app-users",
    templateUrl : `./users.component.html`
})

export class UsersComponent{
    title : string = "Title of the app";

    users : IUser[];

    ngOnInit(){
        this.users = USER_DATA;
    }

    moreInfo(user : IUser){
        alert(`${user.firstName} is working with ${user.company}!!`);
    }

}