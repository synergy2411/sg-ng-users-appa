import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './auth/login/login.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';

export const APP_ROUTES : Routes = [{
    path : "",                         // http://localhost:4200
    redirectTo : "login",
    pathMatch : "full"
},{
    path : "login",                    // http://localhost:4200/login
    component : LoginComponent
}, {
    path : 'register',                 // http://localhost:4200/register
    component : RegisterComponent
}, {
    path : "users",                    // http://localhost:4200/users
    component : UsersComponent
}, {
    path : "pipe",                     // http://localhost:4200/pipe
    component : PipeDemoComponent
}, {
    path : "observable",               // http://localhost:4200/observable
    component : ObservableDemoComponent 
}, {
    path : "product",
    component : ProductComponent,
    children: [{
        path : "overview/:id/:prod_name",
        component : OverviewComponent
    },{
        path : "spec",
        component : SpecificationComponent
    }]
},{
    path : "**",                           // http://localhost:4200/notexist
    redirectTo : 'login',
    pathMatch : 'full'
}]