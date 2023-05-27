import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../services/auth.service";
import {AuthActionTypes, loginFail, loginSuccess, signupFail, signupSuccess} from "../actions/auth.action";
import {catchError, map, mergeMap, of} from "rxjs";


@Injectable()
export class AuthEffect {
  constructor(private actions$: Actions, private service: AuthService) {
  }

  signup$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.SIGNUP),
    mergeMap((action: any) => this.service.signup(action.user).pipe(
        map(user => signupSuccess({user})),
        catchError(response => {
          const {error} = response;
          return of(signupFail({error}))
        })
      )
    )
  ))

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    mergeMap((action: any) => this.service.login(action.credentials).pipe(
        map(user => loginSuccess({user})),
        catchError(response => {
          const {error} = response;
          return of(loginFail({error}))
        })
      )
    )
  ))

}
