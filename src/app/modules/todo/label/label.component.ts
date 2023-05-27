import {Component, Input} from '@angular/core';
import {Label} from "../../../store/models/label.model";
import {Store} from "@ngrx/store";
import {deleteLabel, removeActive, setActive} from "../../../store/actions/label.action";
import {Observable} from "rxjs";
import {SystemError} from "../../../store/models/system-error.model";
import {getActiveLabel, getError} from "../../../store/selectors/label.selector";

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent {

  @Input() label: Label | undefined

  error$: Observable<SystemError | undefined>

  clicked: boolean

  allowUpdate: boolean

  activeLabel$: Observable<Label | undefined>

  constructor(private store: Store) {
    this.clicked = false
    this.allowUpdate = false
    this.error$ = store.select(getError)
    this.activeLabel$ = store.select(getActiveLabel)
  }

  deleteLabel(id?: number) {
    this.clicked = true
    this.store.dispatch(deleteLabel({id}))
  }

  deactivate() {
    this.clicked = false
  }

  update() {
    this.clicked = true;
    this.allowUpdate = true
  }

  toggleActiveness(id?: number) {
    this.store.dispatch(setActive({id}))
  }
}
