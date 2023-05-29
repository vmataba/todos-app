import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Listing } from 'src/app/store/models/listing.model';
import * as fromListingActions from 'src/app/store/actions/listing.action'
import * as fromLabelSelectors from 'src/app/store/selectors/label.selector'
import * as fromListingSelectors from 'src/app/store/selectors/listing.selector'
import { Observable } from 'rxjs';
import { SystemError } from 'src/app/store/models/system-error.model';

@Component({
  selector: 'app-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.css']
})
export class ListingFormComponent implements OnInit {

  @Input() listing: Listing | undefined

  form: FormGroup

  labelId?: number

  error$: Observable<SystemError | undefined>

  constructor(private fb: FormBuilder,private store: Store){
    this.form = fb.group({
      id: [''],
      title: ['',Validators.required],
      status: ['',Validators.required]
    })
    this.error$ = this.store.select(fromListingSelectors.getError)
  }

  ngOnInit(): void {
      this.form.patchValue({
        ...this.listing,
      })
      this.store.select(fromLabelSelectors.getActiveLabel).subscribe(label => {this.labelId = label?.id})
      this.store.dispatch(fromListingActions.clearError())
  }

  get id(){
    return this.form.get('id')
  }
  get title (){
    return this.form.get('title')
  }

  save(){
    if(this.form.invalid){
      return;
    }
    if (this.listing){
      this.store.dispatch(fromListingActions.update({listing: this.form.value}))
      return;
    }
    if (!this.labelId){
      return;
    }
    this.store.dispatch(fromListingActions.add({labelId: this.labelId,listing: this.form.value}))
  }
}
