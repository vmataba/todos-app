import {Component, Input} from '@angular/core';
import {Listing} from "../../../store/models/listing.model";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  @Input() listing: Listing | undefined

  inViewMode:boolean = false

  toggleViewMode(){
    this.inViewMode = !this.inViewMode
  }

}
