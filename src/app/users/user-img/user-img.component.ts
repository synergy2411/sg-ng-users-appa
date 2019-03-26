import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent {

  @Input("user") user: any;
  @Input("title") title: string;

  @Output("btnClicked") btnClicked = new EventEmitter<any>();

  onClick(user: any) {
    this.btnClicked.emit(user);
  }

  // ngOnChanges(changes : SimpleChanges){
  //   console.log("ngOnChanges", changes);
  // }
  // ngOnInit(){console.log("ngOnInit")}
  // ngDoCheck(){console.log("ngDoCheck")}
  // ngAfterContentInit(){console.log("AfterContentInit")}
  // ngAfterContentChecked(){console.log("ngAfterContentChecked")}
  // ngAfterViewInit(){console.log("ngAfterViewInit")}
  // ngAfterViewChecked(){console.log("ngAfterViewChecked")}
  // ngOnDestroy(){console.log("ngOnDestroy")}

}
