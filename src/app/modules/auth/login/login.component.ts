import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {login} from "../../../store/actions/auth.action";
import {
  getError,
  getErrorMessage,
  getFirstName,
  getIsGuest,
  getLoading,
  getUser
} from "../../../store/selectors/auth.selector";
import {User} from "../../../store/models/user.model";
import {Router} from "@angular/router";
import {SystemError} from "../../../store/models/system-error.model";
import { CACHED_APP_STATE_KEY } from 'src/app/store/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  errorMessage$: Observable<string>

  error$: Observable<SystemError | undefined>

  loading$: Observable<boolean>

  showSignupForm: boolean = false

  user$: Observable<User | undefined>

  firstName$: Observable<string | undefined>

  isGuest$: Observable<boolean>

  constructor(private fb: FormBuilder, private store: Store, private router: Router) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
    this.errorMessage$ = store.select(getErrorMessage)
    this.error$ = store.select(getError)
    this.loading$ = store.select(getLoading)
    this.firstName$ = store.select(getFirstName)
    this.user$ = store.select(getUser)
    this.isGuest$ = store.select(getIsGuest)
  }

  ngOnInit() {
    this.user$.subscribe(user => this.username?.patchValue(user?.email))
    this.isGuest$.subscribe(isGuest => isGuest ? null : this.router.navigate(['/home']).then())
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

  handleSignupToggle(info: any) {
    const {shown} = info;
    this.toggleShowSignup(shown);
  }

  toggleShowSignup(hidden = null) {
    if (hidden == true || hidden == false) {
      this.showSignupForm = hidden;
      return;
    }
    this.showSignupForm = !this.showSignupForm
  }
}
