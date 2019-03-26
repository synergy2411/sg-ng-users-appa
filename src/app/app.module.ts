import { HighlightDirective } from './directives/highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UserImgComponent } from './users/user-img/user-img.component';
import { UserVoteComponent } from './users/user-vote/user-vote.component';
import { UnlessDirective } from './directives/unless.directive';


@NgModule({
  declarations: [
    AppComponent, UsersComponent, 
    UserInfoComponent, UserImgComponent, 
    UserVoteComponent,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
