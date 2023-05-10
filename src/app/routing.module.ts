import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {LoginComponent} from "./modules/auth/login/login.component";

const routes = [
  {path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule {

}
