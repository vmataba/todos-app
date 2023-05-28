import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addFail,
  addSuccess,
  deleteList,
  deleteListFail,
  deleteListSuccess,
  ListingActionTypes,
  loadFail,
  loadSuccess,
  updateFail,
  updateSuccess,
} from '../actions/listing.action';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ListingService } from 'src/app/services/listing.service';

@Injectable()
export class ListingEffect {
  constructor(private actions$: Actions, private service: ListingService) {}

  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ListingActionTypes.LOAD),
      mergeMap((action: any) =>
        this.service.load(action.labelId).pipe(
          map((listings) => loadSuccess({ listings })),
          catchError((response) => {
            const { status, statusText, error } = response;
            return of(
              loadFail({
                error: {
                  code: status,
                  message: statusText,
                },
              })
            );
          })
        )
      )
    );
  });

  add$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ListingActionTypes.ADD),
      mergeMap((action: any) =>
        this.service.add(action.labelId, action.listing).pipe(
          map((listing) => addSuccess({ listing })),
          catchError((response) => {
            const { error } = response;
            return of(addFail({ error }));
          })
        )
      )
    );
  });

  delete$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ListingActionTypes.DELETE),
      mergeMap((action: any) =>
        this.service.deleteListing(action.id).pipe(
          map((id) => deleteListSuccess({ id })),
          catchError((response) => {
            const { error } = response;
            return of(deleteListFail({ error }));
          })
        )
      )
    );
  });

  update$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ListingActionTypes.UPDATE),
      mergeMap((action: any) =>
        this.service.update(action.listing.id, action.listing).pipe(
          map((listing) => updateSuccess({ listing })),
          catchError((response) => {
            const { error } = response;
            return of(updateFail({ error }));
          })
        )
      )
    );
  });
}
