import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task.model';
import { SystemError } from '../models/system-error.model';
import { Label } from '../models/label.model';
import { Listing } from '../models/listing.model';

export enum TaskActionTypes {
  UPDATE_LISTING = '[ Task ] Update Listing',
  LOAD = '[ Task ] Load',
  LOAD_SUCCESS = '[ Task ] Load Success',
  LOAD_FAIL = '[ Task ] Load Fail',
  ADD = '[ Task ] Add',
  ADD_SUCCESS = '[ Task ] Add Success',
  ADD_FAIL = '[ Task ] Add Fail',
  UPDATE = '[ Task ] Update',
  UPDATE_SUCCESS = '[ Task ] Update Success',
  UPDATE_FAIL = '[ Task ] Update Fail',
  DELETE = '[ Task ] Delete',
  DELETE_SUCCESS = '[ Task ] Success',
  DELETE_FAIL = '[ Task ] Fail',
}

export const updateListing = createAction(
  TaskActionTypes.UPDATE_LISTING,
  props<{ listing: Listing }>()
);

export const load = createAction(TaskActionTypes.LOAD,props<{labelId?: number}>());

export const loadSuccess = createAction(
  TaskActionTypes.LOAD_SUCCESS,
  props<{ tasks: Task[] }>()
);
export const loadFail = createAction(
  TaskActionTypes.LOAD_FAIL,
  props<{ error: SystemError }>()
);

export const add = createAction(TaskActionTypes.ADD, props<{ task: Task }>());
export const addSuccess = createAction(
  TaskActionTypes.ADD_SUCCESS,
  props<{ task: Task }>()
);
export const addFail = createAction(
  TaskActionTypes.ADD_FAIL,
  props<{ error: SystemError }>()
);

export const update = createAction(
  TaskActionTypes.UPDATE,
  props<{ task: Task }>()
);
export const updateSuccess = createAction(
  TaskActionTypes.UPDATE_SUCCESS,
  props<{ task: Task }>()
);
export const updateFail = createAction(
  TaskActionTypes.UPDATE_FAIL,
  props<{ error: SystemError }>()
);

export const deleteTask = createAction(
  TaskActionTypes.DELETE,
  props<{ id: number }>()
);
export const deleteTaskSuccess = createAction(
  TaskActionTypes.DELETE_SUCCESS,
  props<{ id: number }>()
);
export const deleteTaskFail = createAction(
  TaskActionTypes.DELETE_FAIL,
  props<{ error: SystemError }>()
);
