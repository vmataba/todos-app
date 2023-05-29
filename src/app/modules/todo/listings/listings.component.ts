import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Label } from '../../../store/models/label.model';
import { getActiveLabel } from '../../../store/selectors/label.selector';
import { Listing } from '../../../store/models/listing.model';
import * as fromListingSelectors from '../../../store/selectors/listing.selector';
import * as fromListingActions from '../../../store/actions/listing.action';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
})
export class ListingsComponent {
  label$: Observable<Label | undefined>;

  listings$: Observable<Listing[]>;

  loading$: Observable<boolean>;

  keyword$: Observable<string> = of('');

  constructor(private store: Store) {
    this.label$ = store.select(getActiveLabel);
    this.listings$ = store.select(fromListingSelectors.getListings);
    this.loading$ = store.select(fromListingSelectors.getLoading);
    this.keyword$ = store.select(fromListingSelectors.getSearchKeyWord);
    //this.keyword$ = of('')
    this.keyword$.subscribe((word) => console.log(word));
  }

  updateSearchKeyWord(value:string){
    this.store.dispatch(fromListingActions.updateSearchKeyWord({keyword: value}))
  }
}
