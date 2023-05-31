import {createFeatureSelector} from "@ngrx/store";
import {AuthState} from "../reducers/auth.reducer";
import {TodosState} from "../reducers";
import { LayoutState } from "../reducers/layout.reducer";

export const getAuthState = createFeatureSelector<AuthState>('auth')
export const getTodosState = createFeatureSelector<TodosState>('todos')
export const getLayoutState = createFeatureSelector<LayoutState>('layout')
