import {createFeatureSelector} from "@ngrx/store";
import {AuthState} from "../reducers/auth.reducer";

export const getAuthState = createFeatureSelector<AuthState>('auth')
