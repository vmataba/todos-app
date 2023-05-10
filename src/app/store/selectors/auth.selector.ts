import {createSelector} from "@ngrx/store";
import {getAuthState} from "./feature.selector";
import {SystemError} from "../models/system-error.model";

export const getLoading = createSelector(getAuthState, state => state.loading)

export const getLoaded = createSelector(getAuthState, state => state.loaded)

export const getUser = createSelector(getAuthState, state => state.user)

export const getError = createSelector(getAuthState, state => state.error)

export const getErrorMessage = createSelector(getError, (error:any) => error?.message)
