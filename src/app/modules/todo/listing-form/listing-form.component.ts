import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Listing } from 'src/app/store/models/listing.model';

@Component({
  selector: 'app-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.css']
})
export class ListingFormComponent implements OnInit {

  @Input() listing: Listing | undefined

  form: FormGroup

  constructor(private fb: FormBuilder){
    this.form = fb.group({
      title: ['',Validators.required],
      status: ['',Validators.required]
    })
  }

  ngOnInit(): void {
      this.form.patchValue({
        ...this.form.value,
        title: this.listing?.title,
        status: this.listing?.status
      })
  }

  get title (){
    return this.form.get('title')
  }

}
