import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Label} from "../../../store/models/label.model";
import {getActiveLabel} from "../../../store/selectors/label.selector";
import {Listing} from "../../../store/models/listing.model";

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent {

  label$: Observable<Label | undefined>

  constructor(private store: Store) {
    this.label$ = store.select(getActiveLabel)
  }

  groupIntoRows(listings: Listing[], columnsCount: number) {
    let groupedListings: { rowNumber?: number, listings?: Listing[] }[] = []
    for (let count = 0; count < listings.length; count += columnsCount) {
      try {
        groupedListings.push({
          rowNumber: count + 1,
          listings: listings?.slice(count, count + columnsCount)
        })
      } catch (e) {
      }
    }
    return groupedListings;
  }
}
