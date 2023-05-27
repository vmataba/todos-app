import {createAction, props} from "@ngrx/store";
import {Label} from "../models/label.model";
import {SystemError} from "../models/system-error.model";

export enum LabelActionTypes {
  LOAD = '[ Label ] Load',
  LOAD_SUCCESS = '[ Label ] Load Success',
  LOAD_FAIL = '[ Label ] Load Fail',
  ADD = '[ Label ] Add',
  ADD_SUCCESS = '[ Label ] Add Success',
  ADD_FAIL = '[ Label ] Add Fail',
  DELETE = '[ Label ] Delete',
  DELETE_SUCCESS = '[ Label ] Delete Success',
  DELETE_FAIL = '[ Label ] Delete Fail',
  UPDATE = '[ Label ] Update',
  UPDATE_SUCCESS = '[ Label ] Update Success',
  UPDATE_FAIL = '[ Label ] Update Fail',
  SET_ACTIVE = '[ Label ] Set Active',
  REMOVE_ACTIVE = '[ Label ] Remove Active',
}

export const load = createAction(LabelActionTypes.LOAD, props<{ userId: number | undefined }>())
export const loadSuccess = createAction(LabelActionTypes.LOAD_SUCCESS, props<{ labels: Label[] }>())
export const loadFail = createAction(LabelActionTypes.LOAD_FAIL, props<{ error: SystemError }>())
export const add = createAction(LabelActionTypes.ADD, props<{ userId?: number, label: Label }>())
export const addSuccess = createAction(LabelActionTypes.ADD_SUCCESS, props<{ label: Label }>())
export const addFail = createAction(LabelActionTypes.ADD_FAIL, props<{ error: SystemError }>())
export const deleteLabel = createAction(LabelActionTypes.DELETE, props<{ id?: number }>())
export const deleteSuccess = createAction(LabelActionTypes.DELETE_SUCCESS, props<{ id: number }>())
export const deleteFail = createAction(LabelActionTypes.DELETE_FAIL, props<{ error: SystemError }>())
export const update = createAction(LabelActionTypes.UPDATE, props<{ label: Label }>())
export const updateSuccess = createAction(LabelActionTypes.UPDATE_SUCCESS, props<{ label: Label }>())
export const updateFail = createAction(LabelActionTypes.UPDATE_FAIL, props<{ error: SystemError }>())
export const setActive = createAction(LabelActionTypes.SET_ACTIVE, props<{ id?: number }>())
export const removeActive = createAction(LabelActionTypes.REMOVE_ACTIVE)
