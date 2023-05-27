import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {signup} from "../../../store/actions/auth.action";
import {Observable} from "rxjs";
import {getError, getLoading, getUser} from "../../../store/selectors/auth.selector";
import {SystemError} from "../../../store/models/system-error.model";
import {User} from "../../../store/models/user.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup

  loading$: Observable<boolean>

  error$: Observable<SystemError | undefined>

  user$: Observable<User | undefined>

  @Output() onToggle = new EventEmitter();

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = fb.group({
      first_name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmation_password: ['', Validators.required],
    })
    this.loading$ = store.select(getLoading)
    this.error$ = store.select(getError)
    this.user$ = store.select(getUser)
  }

  ngOnInit() {
    this.user$.subscribe(user => {
      if (!user) {
        return
      }
      this.fireOnToggle()
    })
  }

  fireOnToggle() {
    this.onToggle.emit({shown: false})
  }

  get first_name() {
    return this.form.get('first_name')
  }

  get middle_name() {
    return this.form.get('middle_name')
  }

  get last_name() {
    return this.form.get('last_name')
  }

  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }

  get confirmation_password() {
    return this.form.get('confirmation_password')
  }

  signup() {
    this.store.dispatch(signup({user: this.form.value}))
  }
}
