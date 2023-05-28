import {ActionReducer, combineReducers, MetaReducer} from "@ngrx/store";
import {authReducer, AuthState} from "./auth.reducer";
import {labelsReducer, LabelsState} from "./label.reducer";
import { listingReducer, ListingState } from "./listing.reducer";
import { taskReducer, TaskState } from "./task.reducer";

export interface TodosState {
  labels: LabelsState
  listings: ListingState
  tasks: TaskState
}

export interface AppState {
  auth: AuthState,
  todos: TodosState
}

export const todosReducer = combineReducers({
  labels: labelsReducer,
  listings: listingReducer,
  tasks: taskReducer
})

export const appReducers = combineReducers({
  auth: authReducer,
  todos: todosReducer
})

export const storeStateChanges = (reducer: ActionReducer<any>) => {
  return function (state: any, action: any) {
    state = reducer(state, action)
    localStorage.setItem('appState', JSON.stringify(state))
    return state
  }
}
export const metaReducers: MetaReducer<any>[] = [
  storeStateChanges
]
