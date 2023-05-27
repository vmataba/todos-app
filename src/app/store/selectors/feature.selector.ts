import {createFeatureSelector} from "@ngrx/store";
import {AuthState} from "../reducers/auth.reducer";
import {TodosState} from "../reducers";

export const getAuthState = createFeatureSelector<AuthState>('auth')
export const getTodosState = createFeatureSelector<TodosState>('todos')
