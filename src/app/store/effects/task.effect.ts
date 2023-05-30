import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addFail,
  addSuccess,
  deleteTaskSuccess,
  deleteTaskFail,
  TaskActionTypes,
  loadFail,
  loadSuccess,
  updateFail,
  updateSuccess,
} from '../actions/task.action ';
import { catchError, map, mergeMap, of } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';

@Injectable()
export class TaskEffect {
  constructor(private actions$: Actions, private service: TaskService) {}

  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActionTypes.LOAD),
      mergeMap((action: any) =>
        this.service.loadByLabel(action.labelId).pipe(
          map((tasks) => loadSuccess({ tasks })),
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
      ofType(TaskActionTypes.ADD),
      mergeMap((action: any) =>
        this.service.add(action.task).pipe(
          map((task) => addSuccess({ task })),
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
      ofType(TaskActionTypes.DELETE),
      mergeMap((action: any) =>
        this.service.deleteTask(action.id).pipe(
          map((id) => deleteTaskSuccess({ id })),
          catchError((response) => {
            const { error } = response;
            return of(deleteTaskFail({ error }));
          })
        )
      )
    );
  });

  update$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActionTypes.UPDATE),
      mergeMap((action: any) =>
        this.service.update(action.task.id, action.task).pipe(
          map((task) => updateSuccess({ task })),
          catchError((response) => {
            const { error } = response;
            return of(updateFail({ error }));
          })
        )
      )
    );
  });
}
