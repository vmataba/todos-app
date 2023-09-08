import { createSelector } from '@ngrx/store';
import { getTodosState } from './feature.selector';
import { Task } from '../models/task.model';

export const getTaskState = createSelector(
  getTodosState,
  (state) => state.tasks
);

export function getTasks(listingId?: number) {
  return createSelector(getTaskState, (state) =>
    [...state.tasks].filter((task: Task) => task.listingId == listingId).sort(
      (a, b) => {
        const firstDescription = a.description.toLowerCase()
        const secondDescription = b.description.toLowerCase()
        if (firstDescription < secondDescription){
            return -1
        }
        return 1;
      }
    )
  );
}
