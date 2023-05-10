import {createAction, props} from "@ngrx/store";
import {User} from "../models/user.model";
import {SystemError} from "../models/system-error.model";
import {Credential} from '../models/credential.model'

export enum AuthActionTypes {
  LOGIN = "[ Auth ] | Login",
  LOGIN_SUCCESS = "[ Auth ] | Login Success",
  LOGIN_FAIL = "[ Auth ] | Login Fail",
}

export const login = createAction(AuthActionTypes.LOGIN, props<{ credentials: Credential }>())
export const loginSuccess = createAction(AuthActionTypes.LOGIN_SUCCESS, props<{ user: User }>())
export const loginFail = createAction(AuthActionTypes.LOGIN_FAIL, props<{ error: SystemError }>())
