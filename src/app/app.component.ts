import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getMode } from './store/selectors/layout.selector';
import { MODE_DARK, MODE_LIGHT } from './store/models/layout.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'todos';

  lightMode = MODE_LIGHT
  
  darkMode = MODE_DARK

  mode$: Observable<string>

  constructor(private router: Router,private store: Store) {
    this.mode$ = store.select(getMode)
  }

  ngOnInit() {
    this.router.navigate(['/login']).then(r => r)
  }
}
