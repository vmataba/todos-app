import { createReducer, on } from '@ngrx/store';
import { MODE_LIGHT } from '../models/layout.model';
import { getStoredState } from '../selectors';
import { changeMode } from '../actions/layout.action';

export interface LayoutState {
  mode: string;
}

const initialState: LayoutState = getStoredState('layout', {
  mode: MODE_LIGHT
});

export const layoutReducer = createReducer(
  initialState,
  on(changeMode, (state, { mode }) => ({ ...state,mode }))
);
