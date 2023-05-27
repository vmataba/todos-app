import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Label} from "../../../store/models/label.model";
import {getError, getLabels, getLoaded, getLoading} from "../../../store/selectors/label.selector";
import {User} from "../../../store/models/user.model";
import {getUser} from "../../../store/selectors/auth.selector";
import {load} from "../../../store/actions/label.action";
import {SystemError} from "../../../store/models/system-error.model";

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {

  showForm: boolean

  loading$: Observable<boolean>

  loaded$: Observable<boolean>

  labels$: Observable<Label[]>

  user$: Observable<User | undefined>

  error$: Observable<SystemError | undefined>

  constructor(private store: Store) {
    this.showForm = false
    this.labels$ = store.select(getLabels)
    this.loading$ = store.select(getLoading)
    this.loaded$ = store.select(getLoaded)
    this.user$ = store.select(getUser)
    this.error$ = store.select(getError)
  }

  toggleShowForm() {
    this.showForm = !this.showForm
  }

  ngOnInit() {
    this.user$.subscribe(user => {
      this.store.dispatch(load({userId: user?.id}))
    })
  }
}
