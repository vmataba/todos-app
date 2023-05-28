import {Component, Input, OnInit} from '@angular/core';
import {Label} from "../../../store/models/label.model";
import {Store} from "@ngrx/store";
import {deleteLabel, removeActive, setActive} from "../../../store/actions/label.action";
import {Observable} from "rxjs";
import {SystemError} from "../../../store/models/system-error.model";
import {getActiveLabel, getError} from "../../../store/selectors/label.selector";
import * as fromListingSelectors from "../../../store/selectors/listing.selector";
import * as fromListingActions from "../../../store/actions/listing.action";

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit{

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

  ngOnInit(): void {
      this.activeLabel$.subscribe(label => {
       // this.store.dispatch(fromListingActions.updateLabel({label}))
      })
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
    this.store.dispatch(fromListingActions.load({labelId: id}))
  }
}
