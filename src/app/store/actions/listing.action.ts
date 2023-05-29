import { createAction, props } from "@ngrx/store";
import { Listing } from "../models/listing.model";
import { SystemError } from "../models/system-error.model";
import { Label } from "../models/label.model";

export enum ListingActionTypes{
    UPDATE_LABEL = '[ Label ] Update Label',
    LOAD = '[ Listing ] Load',
    LOAD_SUCCESS = '[ Listing ] Load Success',
    LOAD_FAIL = '[ Listing ] Load Fail',
    ADD = '[ Listing ] Add',
    ADD_SUCCESS = '[ Listing ] Add Success',
    ADD_FAIL = '[ Listing ] Add Fail',
    UPDATE = '[ Listing ] Update',
    UPDATE_SUCCESS = '[ Listing ] Update Success',
    UPDATE_FAIL = '[ Listing ] Update Fail',
    DELETE = '[ Listing ] Delete',
    DELETE_SUCCESS = '[ Listing ] Success',
    DELETE_FAIL = '[ Listing ] Fail',
    UPDATE_SEARCH_KEYWORD = '[ Listing ] Update Search Keyword',
}

export const updateLabel = createAction(ListingActionTypes.UPDATE_LABEL,props<{label:Label | undefined}>())

export const load = createAction(ListingActionTypes.LOAD,props<{labelId?: number}>())
export const loadSuccess = createAction(ListingActionTypes.LOAD_SUCCESS,props<{listings: Listing[]}>())
export const loadFail = createAction(ListingActionTypes.LOAD_FAIL,props<{error: SystemError}>())

export const add = createAction(ListingActionTypes.ADD,props<{listing: Listing}>())
export const addSuccess = createAction(ListingActionTypes.ADD_SUCCESS,props<{listing: Listing}>())
export const addFail = createAction(ListingActionTypes.ADD_FAIL,props<{error: SystemError}>())


export const update = createAction(ListingActionTypes.UPDATE,props<{listing: Listing}>())
export const updateSuccess = createAction(ListingActionTypes.UPDATE_SUCCESS,props<{listing: Listing}>())
export const updateFail = createAction(ListingActionTypes.UPDATE_FAIL,props<{error: SystemError}>())

export const deleteList = createAction(ListingActionTypes.DELETE,props<{id: number}>())
export const deleteListSuccess = createAction(ListingActionTypes.DELETE_SUCCESS,props<{id: number}>())
export const deleteListFail = createAction(ListingActionTypes.DELETE_FAIL,props<{error: SystemError}>())

export const updateSearchKeyWord = createAction(ListingActionTypes.UPDATE_SEARCH_KEYWORD,props<{keyword: string}>())