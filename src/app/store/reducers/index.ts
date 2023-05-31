import {ActionReducer, combineReducers, MetaReducer} from "@ngrx/store";
import {authReducer, AuthState} from "./auth.reducer";
import {labelsReducer, LabelsState} from "./label.reducer";
import { listingReducer, ListingState } from "./listing.reducer";
import { taskReducer, TaskState } from "./task.reducer";
import { AuthActionTypes } from "../actions/auth.action";
import { layoutReducer, LayoutState } from "./layout.reducer";

export const CACHED_APP_STATE_KEY = 'appState'

export interface TodosState {
  labels: LabelsState
  listings: ListingState
  tasks: TaskState
}

export interface AppState {
  layout: LayoutState,
  auth: AuthState,
  todos: TodosState
}

export const todosReducer = combineReducers({
  labels: labelsReducer,
  listings: listingReducer,
  tasks: taskReducer
})

export const appReducers = combineReducers({
  layout: layoutReducer,
  auth: authReducer,
  todos: todosReducer
})

export const storeStateChanges = (reducer: ActionReducer<any>) => {
  return function (state: any, action: any) {
    if (action.type == AuthActionTypes.LOGOUT){
      //TODO: use logout success
    }
 
    state = reducer(state, action)
    localStorage.setItem(CACHED_APP_STATE_KEY, JSON.stringify(state))
    return state
  }
}
export const metaReducers: MetaReducer<any>[] = [
  storeStateChanges
]
