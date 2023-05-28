import { createSelector } from "@ngrx/store";
import { getTodosState } from "./feature.selector";
import { state } from "@angular/animations";

export const getTaskState = createSelector(getTodosState, state => state.tasks)

export function getTasks(listingId: number){
    return createSelector(getTaskState,state => state.tasks.filter(task => task.listingId == listingId))
}