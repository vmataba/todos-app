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
  updateLabel,
  updateSearchKeyWord,
  clearError,
  setActive,
} from '../actions/listing.action';
import { state } from '@angular/animations';

export interface ListingState {
  loading: boolean;
  loaded: boolean;
  label: Label | undefined;
  listings: Listing[];
  activeListing?: Listing;
  error?: SystemError;
  keyword: string;
}

const initialState = getStoredState('todos.listings', {
  loading: false,
  loaded: false,
  listings: [],
  keyword: '',
});

export const listingReducer = createReducer(
  initialState,
  on(updateLabel, (state, { label }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: undefined,
    label,
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
    error,
  })),
  on(addSuccess, (state, { listing }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: undefined,
    listings: [...state.listings, listing],
  })),
  on(addFail, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  })),
  on(updateSuccess, (state, { listing }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: undefined,
    listings: [
      ...state.listings.filter(
        (existingListing: Listing) => existingListing.id != listing.id
      ),
      listing,
    ],
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
    error: undefined,
    listings: [
      ...state.listings.filter((listing: Listing) => listing.id != id),
    ],
  })),
  on(deleteListFail, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  })),
  on(updateSearchKeyWord, (state, { keyword }) => ({
    ...state,
    loading: false,
    loaded: false,
    keyword,
  })),
  on(clearError, (state) => ({
    ...state,
    error: undefined,
  })),
  on(setActive, (state, { activeListing }) => ({
    ...state,
    loading: false,
    loaded: false,
    activeListing,
    listings: [
      ...state.listings.filter(
        (listing: Listing) => listing.id != activeListing.id
      ),
      activeListing,
    ],
  })),
  on(clearError, (state) => ({
    ...state,
    error: undefined,
  }))
);
