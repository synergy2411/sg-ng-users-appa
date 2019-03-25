import { Component } from '@angular/core';

@Component({
    selector : "app-users",
    templateUrl : `./users.component.html`
})

export class UsersComponent{
    user = {
        firstName : "Bill",
        lastName : "Gates",
        dob : new Date("Dec 24 '1965"),
        isWorking : true,
        income : 50000,
        company : "Microsoft Inc.",
        image : "./assets/images/bill.jpg",
        vote : 180
    }

    moreInfo(user : any){
        alert(`${user.firstName} is working with ${user.company}!!`);
    }

}