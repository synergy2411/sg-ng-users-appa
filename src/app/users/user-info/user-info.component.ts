import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent  {

  @Input("user") user : any;
  @Input("index") index : any;

  dynamicClasses = {
    feature : true,
    bold : false
  }

  dynamicColor = "#f34ff5"

  dynamicStyles = {
    "border-bottom" : "2px #ccc solid"
  }

  onToggle(){
    this.dynamicClasses.bold = !this.dynamicClasses.bold;
    this.dynamicClasses.feature = !this.dynamicClasses.feature;
  }

}
