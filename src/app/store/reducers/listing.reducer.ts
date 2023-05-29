import { createReducer, on } from '@ngrx/store';
import { Label } from '../models/label.model';
import { Listing } from '../models/listing.model';
import { SystemError } from '../models/system-error.model';
import { getStoredState } from '../selectors';
import {
  ListingActionTypes,
  load,
  loadSuccess,
  loadFail,
  add,
  addSuccess,
  addFail,
  update,
  updateSuccess,
  updateFail,
  deleteList,
  deleteListSuccess,
  deleteListFail,
  updateLabel
} from '../actions/listing.action';
import { state } from '@angular/animations';

export interface ListingState {
  loading: boolean;
  loaded: boolean;
  label: Label | undefined;
  listings: Listing[];
  error?: SystemError;
}

const initialState = getStoredState('todos.listings', {
  loading: false,
  loaded: false,
  listings: [],
});

export const listingReducer = createReducer(
  initialState,
  on(updateLabel, (state,{label}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: undefined,
    label
  })),
  on(load, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: undefined,
  })),
  on(loadSuccess, (state, { listings }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: undefined,
    listings,
  })),
  on(loadFail, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error
  })),
  on(addSuccess, (state, { listing }) => ({
    ...state,
    loading: false,
    loaded: true,
    listings: [
        ...state.listings,
        listing
    ]
  })),
  on(addFail, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error
  })),
  on(updateSuccess, (state, { listing }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: undefined,
    listings: [
        ...state.listings.filter((existingListing:Listing) => existingListing.id != listing.id),
        listing
    ]
  })),
  on(updateFail, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  })),
  on(deleteListSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    loaded: false,
    listings: [
        ...state.listings.filter((listing:Listing) => listing.id != id)
    ]
  })),
  on(deleteListFail, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  })),
);
