import { SystemError } from '../models/system-error.model';
import { User } from '../models/user.model';
import { createReducer, on } from '@ngrx/store';
import {
  clearError,
  login,
  loginFail,
  loginSuccess,
  logout,
  signup,
  signupFail,
  signupSuccess,
} from '../actions/auth.action';
import { getStoredState } from '../selectors';

export interface AuthState {
  loading: boolean;
  loaded: boolean;
  isGuest: boolean;
  error?: SystemError;
  user?: User;
}

const initialState = getStoredState('auth', {
  loading: false,
  loaded: false,
  isGuest: true,
});

export const authReducer = createReducer(
  initialState,

  on(login, (state, { credentials }) => {
    sessionStorage.setItem('token',btoa(credentials.password))
    return {
      ...state,
      loading: true,
      loaded: false,
    }
  }),
  on(loginSuccess, (state, { user }) => {
    const token =  btoa(user.email+':'+atob((sessionStorage.getItem('token') as string)))
    sessionStorage.setItem('auth',token)
    return {
      ...state,
      loading: false,
      loaded: true,
      user,
      isGuest: false,
    }
  }),
  on(loginFail, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  })),
  on(logout, (state) => {
    sessionStorage.removeItem('auth')
    return {
      ...state,
      isGuest: true,
      user: undefined,
      error: undefined,
      loaded: false,
      loading: false,
    };
  }),
  on(signup, (state, { user }) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(signupSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    loaded: true,
    isGuest: true,
    user,
  })),
  on(signupFail, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    isGuest: true,
    error,
  })),
  on(clearError, (state) => ({
    ...state,
    loading: false,
    loaded: false,
    isGuest: true,
    error:undefined,
  }))
);
