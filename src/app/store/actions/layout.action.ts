import { createAction, props } from '@ngrx/store';

export enum LayoutActionType {
  CHANGE_MODE = '[ Layout ] Change Mode',
}

export const changeMode = createAction(
  LayoutActionType.CHANGE_MODE,
  props<{ mode: string }>()
);
