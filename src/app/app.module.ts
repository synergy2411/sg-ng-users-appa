
import { HighlightDirective } from './directives/highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UserImgComponent } from './users/user-img/user-img.component';
import { UserVoteComponent } from './users/user-vote/user-vote.component';
import { UnlessDirective } from './directives/unless.directive';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/countrycode.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DataService } from './services/data.service';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent, UsersComponent, 
    UserInfoComponent, UserImgComponent, 
    UserVoteComponent,
    HighlightDirective,
    UnlessDirective,
    LoginComponent,
    RegisterComponent,
    PipeDemoComponent,
    CountryCodePipe,
    FilterPipe,
    ObservableDemoComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ DataService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
