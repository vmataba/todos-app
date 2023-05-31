import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../../../store/actions/auth.action';
import { Router } from '@angular/router';
import { CACHED_APP_STATE_KEY } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { getFirstNameLetter } from 'src/app/store/selectors/auth.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  firstNameLetter$: Observable<string | undefined>;

  constructor(private store: Store, private router: Router) {
    this.firstNameLetter$ = store.select(getFirstNameLetter);
  }

  logout() {
    this.store.dispatch(logout());
    //TODO: add this in effects
    this.router.navigate(['/login']).then();
  }
}
