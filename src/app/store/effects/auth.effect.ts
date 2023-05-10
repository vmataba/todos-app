import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../services/auth.service";
import {AuthActionTypes, loginFail, loginSuccess} from "../actions/auth.action";
import {catchError, map, mergeMap, of} from "rxjs";


@Injectable()
export class AuthEffect {
  constructor(private actions$: Actions, private service: AuthService) {
  }


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
