import {createAction, props} from "@ngrx/store";
import {User} from "../models/user.model";
import {SystemError} from "../models/system-error.model";
import {Credential} from '../models/credential.model'

export enum AuthActionTypes {
  LOGIN = "[ Auth ] Login",
  LOGIN_SUCCESS = "[ Auth ] Login Success",
  LOGIN_FAIL = "[ Auth ] Login Fail",
  LOGOUT = "[ Auth ] Logout",
  SIGNUP = '[ Auth ] Signup',
  SIGNUP_SUCCESS = '[ Auth ] Signup Success',
  SIGNUP_FAIL = '[ Auth ] Signup Fail',
  CLEA_ERROR = '[ Auth ] Clear Error'
}

export const login = createAction(AuthActionTypes.LOGIN, props<{ credentials: Credential }>())
export const loginSuccess = createAction(AuthActionTypes.LOGIN_SUCCESS, props<{ user: User }>())
export const loginFail = createAction(AuthActionTypes.LOGIN_FAIL, props<{ error: SystemError }>())
export const signup = createAction(AuthActionTypes.SIGNUP, props<{ user: User }>())
export const signupSuccess = createAction(AuthActionTypes.SIGNUP_SUCCESS, props<{ user: User }>())
export const signupFail = createAction(AuthActionTypes.SIGNUP_FAIL, props<{ error: SystemError }>())
export const logout = createAction(AuthActionTypes.LOGOUT)
export const clearError = createAction(AuthActionTypes.CLEA_ERROR)
