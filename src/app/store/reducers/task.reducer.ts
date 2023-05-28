import { createReducer, on } from '@ngrx/store';
import { Label } from '../models/label.model';
import { Listing } from '../models/listing.model';
import { SystemError } from '../models/system-error.model';
import { getStoredState } from '../selectors';
import {
  load,
  loadSuccess,
  loadFail,
  add,
  addSuccess,
  addFail,
  update,
  updateSuccess,
  updateFail,
  deleteTask,
  deleteTaskSuccess,
  deleteTaskFail,
  updateListing
} from '../actions/task.action ';
import { state } from '@angular/animations';
import { Task } from '../models/task.model';

export interface TaskState {
  loading: boolean;
  loaded: boolean;
  listing: Listing | undefined;
  tasks: Task[];
  error?: SystemError;
}

const initialState = getStoredState('todos.tasks', {
  loading: false,
  loaded: false,
  tasks: [],
});

export const taskReducer = createReducer(
  initialState,
  on(updateListing, (state,{listing}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: undefined,
    listing
  })),
  on(load, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: undefined,
  })),
  on(loadSuccess, (state, { tasks }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: undefined,
    tasks,
  })),
  on(loadFail, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error
  })),
  on(addSuccess, (state, { task }) => ({
    ...state,
    loading: false,
    loaded: true,
    tasks: [
        ...state.tasks,
        task
    ]
  })),
  on(addFail, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error
  })),
  on(updateSuccess, (state, { task }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: undefined,
    tasks: [
        ...state.task.filter((existingTask:Task) => existingTask.id != task.id),
        task
    ]
  })),
  on(updateFail, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  })),
  on(deleteTaskSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    loaded: false,
    tasks: [
        ...state.tasks.filter((task:Task) => task.id != id)
    ]
  })),
  on(deleteTaskFail, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  })),
);
