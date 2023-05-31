import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeMode } from 'src/app/store/actions/layout.action';
import { MODE_DARK, MODE_LIGHT } from 'src/app/store/models/layout.model';
import { getMode } from 'src/app/store/selectors/layout.selector';

@Component({
  selector: 'app-mode-switch',
  templateUrl: './mode-switch.component.html',
  styleUrls: ['./mode-switch.component.css'],
})
export class ModeSwitchComponent {
  
  lightMode = MODE_LIGHT;

  darkMode = MODE_DARK;

  mode$: Observable<string>;

  constructor(private store: Store) {
    this.mode$ = store.select(getMode);
   
  }

  switch(mode: string) {
    this.store.dispatch(changeMode({ mode }));
  }
}
