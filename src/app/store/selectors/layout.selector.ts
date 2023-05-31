import { createSelector } from "@ngrx/store";
import { getLayoutState } from "./feature.selector";

export const getMode = createSelector(getLayoutState,state => state.mode)