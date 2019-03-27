import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent {
  obsData = Observable.create((observer)=>{
    setTimeout(()=>{
      observer.next("First Package")
    }, 1000);
    setTimeout(()=>{
      observer.next("Second Package")
    }, 2000);
    setTimeout(()=>{
      observer.error(new Error("Something bad happened!"))
    }, 3000);
    setTimeout(()=>{
      observer.next("Third Package")
    }, 4000);
    setTimeout(()=>{
      observer.complete();
    }, 6000);
    setTimeout(()=>{
      observer.next("Fourth Package")
    }, 8000);
  })

  subscribeData : any;
  subscription : any;

  onSubscribe(){
    this.subscription = this.obsData.subscribe(
      data => this.subscribeData = data,
      err => this.subscribeData = err,
      () => console.log("[COMPLETED]")
    )
  }
  onUnsubscribe(){
    this.subscription.unsubscribe();
  }

}
