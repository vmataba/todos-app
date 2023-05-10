import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable, of} from "rxjs";
import {Store} from "@ngrx/store";
import {login} from "../../../store/actions/auth.action";
import {getErrorMessage, getLoading} from "../../../store/selectors/auth.selector";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup

  errorMessage$: Observable<string>

  loading$: Observable<boolean>

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
    this.errorMessage$ = store.select(getErrorMessage)
    this.loading$ = store.select(getLoading)
  }

  get username() {
    return this.form.get('username')
  }

  get password() {
    return this.form.get('password')
  }

  login() {
    this.store.dispatch(login({credentials: (this.form.value)}))
  }
}
