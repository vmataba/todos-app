import {getTodosState} from "./feature.selector";
import {createSelector} from "@ngrx/store";

export const getLabelsState = createSelector(getTodosState, state => state.labels)

export const getLoading = createSelector(getLabelsState, state => state.loading)

export const getLoaded = createSelector(getLabelsState, state => state.loaded)

export const getLabels = createSelector(getLabelsState, state => state.labels)

export const getError = createSelector(getLabelsState, state => state.error)

export const getActiveLabel = createSelector(getLabelsState, state => state.activeLabel)
