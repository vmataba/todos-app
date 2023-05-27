import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LabelService} from "../../services/label.service";
import {
  addFail,
  addSuccess,
  deleteFail,
  deleteSuccess,
  LabelActionTypes,
  loadFail,
  loadSuccess,
  updateFail,
  updateSuccess
} from "../actions/label.action";
import {catchError, map, mergeMap, of} from "rxjs";


@Injectable()
export class LabelEffect {
  constructor(private actions$: Actions, private service: LabelService) {
  }

  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LabelActionTypes.LOAD),
      mergeMap((action: any) => this.service.load(action.userId).pipe(
          map(labels => loadSuccess({labels})),
          catchError(response => {
            const {status, statusText, error} = response;
            return of(loadFail({
              error: {
                code: status,
                message: statusText
              }
            }))
          })
        )
      )
    );
  })

  add$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LabelActionTypes.ADD),
      mergeMap((action: any) => this.service.add(action.userId, action.label).pipe(
          map(label => addSuccess({label})),
          catchError(response => {
            const {error} = response;
            return of(addFail({error}))
          })
        )
      )
    );
  })

  delete$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LabelActionTypes.DELETE),
      mergeMap((action: any) => this.service.deleteLabel(action.id).pipe(
          map(id => deleteSuccess({id})),
          catchError(response => {
            const {error} = response;
            return of(deleteFail({error}))
          })
        )
      )
    );
  })

  update$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LabelActionTypes.UPDATE),
      mergeMap((action: any) => this.service.update(action.label.id, action.label).pipe(
          map(label => updateSuccess({label})),
          catchError(response => {
            const {error} = response;
            return of(updateFail({error}))
          })
        )
      )
    );
  })

}
