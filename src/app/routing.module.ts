import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./modules/auth/login/login.component";
import {SignupComponent} from "./modules/auth/signup/signup.component";
import {HomeComponent} from "./modules/todo/home/home.component";

const routes = [
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'home', component: HomeComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule {

}
