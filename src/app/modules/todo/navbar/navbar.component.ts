import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {logout} from "../../../store/actions/auth.action";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private store: Store, private router: Router) {
  }

  logout() {
    this.store.dispatch(logout())
    //TODO: add this in effects
    this.router.navigate(['/login']).then()
  }
}
