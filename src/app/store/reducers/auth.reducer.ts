import {SystemError} from "../models/system-error.model";
import {User} from "../models/user.model";
import {createReducer, on} from "@ngrx/store";
import {login, loginFail, loginSuccess} from "../actions/auth.action";

export interface AuthState {
  loading: boolean
  loaded: boolean
  error?: SystemError
  user?: User
}

const initialState: AuthState = {
  loading: false,
  loaded: false
}

export const authReducer = createReducer(initialState,

  on(login, (state, {credentials}) => ({...state, loading: true, loaded: false})),
  on(loginSuccess, (state, {user}) => ({...state, loading: false, loaded: true, user})),
  on(loginFail, (state, {error}) => ({...state, loading: false, loaded: false, error})),
)
