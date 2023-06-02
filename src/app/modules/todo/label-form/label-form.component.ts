import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {add, update} from "../../../store/actions/label.action";
import {getUser} from "../../../store/selectors/auth.selector";
import {Observable} from "rxjs";
import {SystemError} from "../../../store/models/system-error.model";
import {getError} from "../../../store/selectors/label.selector";
import {Label} from "../../../store/models/label.model";
import { getMode } from 'src/app/store/selectors/layout.selector';
import { MODE_DARK, MODE_LIGHT } from 'src/app/store/models/layout.model';

@Component({
  selector: 'app-label-form',
  templateUrl: './label-form.component.html',
  styleUrls: ['./label-form.component.css']
})
export class LabelFormComponent implements OnInit, OnDestroy {

  form: FormGroup

  userId?: number

  error$: Observable<SystemError | undefined>

  @Input() label: Label | undefined

  modeDark = MODE_DARK

  mode$: Observable<string>

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = fb.group({
      id: [this.label?.id],
      name: ['', Validators.required]
    })

    store.select(getUser).subscribe(user => {
      if (user) {
        this.userId = user.id
      }
    })

    this.error$ = store.select(getError)

    this.mode$ = store.select(getMode)
  }

  ngOnInit() {
    this.form.patchValue({
      ...this.label
    })
  }


  save() {
    if (this.label?.id) {
      this.store.dispatch(update({label: this.form.value}))
      this.form.reset({})
      this.label = undefined
      return;
    }
    this.store.dispatch(add({userId: this.userId, label: this.form.value}))
    this.form.reset({})
  }

  ngOnDestroy(): void {
    this.label = undefined
  }
}
