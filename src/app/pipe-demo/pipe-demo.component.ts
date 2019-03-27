import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent{

  filteredStatus = "";

  todos = [{
    label : "Some Work",
    status : "completed"
  },{
    label : "Some Work",
    status : "completed"
  },{
    label : "New Work",
    status : "pending"
  },{
    label : "New Work",
    status : "pending"
  }]

  onAddNewWork(){
    this.todos.push({label : "New Work", status : "pending"});
  }

  promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Here comes the data");
    }, 3000)
  })
  // .then(response => {
  //   console.log(response);
  // })
  // .catch(err => console.log(err));


  contact_no : number = 987654321;

}
