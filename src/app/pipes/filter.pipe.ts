import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(todos : {label : string, status : string}[], filteredStatus : string, status : string): {label : string, status : string}[] {
    if(todos.length == 0 || filteredStatus == ""){
      return todos;
    }
    let resultArray = [];
    for(let todo of todos){
      if(todo[status] === filteredStatus){
        resultArray.push(todo);
      }
    }
    return resultArray;
  }

}
