import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {User} from "../../../store/models/user.model";
import {Observable} from "rxjs";
import {getUser} from "../../../store/selectors/auth.selector";

@Component({
  selector: 'app-welcome-note',
  templateUrl: './welcome-note.component.html',
  styleUrls: ['./welcome-note.component.css']
})
export class WelcomeNoteComponent {

  user$: Observable<User | undefined>
  constructor(private store: Store) {
    this.user$ = store.select(getUser)
  }
}
