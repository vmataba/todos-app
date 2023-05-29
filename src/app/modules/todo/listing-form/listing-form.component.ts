import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Listing } from 'src/app/store/models/listing.model';
import * as fromListingActions from 'src/app/store/actions/listing.action'

@Component({
  selector: 'app-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.css']
})
export class ListingFormComponent implements OnInit {

  @Input() listing: Listing | undefined

  form: FormGroup

  constructor(private fb: FormBuilder,private store: Store){
    this.form = fb.group({
      id: [''],
      title: ['',Validators.required],
      status: ['',Validators.required]
    })
  }

  ngOnInit(): void {
      this.form.patchValue({
        ...this.listing,
        //title: this.listing?.title,
        //status: this.listing?.status
      })
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
    if (this.id){
      this.store.dispatch(fromListingActions.update({listing: this.form.value}))
      return;
    }
    this.store.dispatch(fromListingActions.add({listing: this.form.value}))
  }
}
