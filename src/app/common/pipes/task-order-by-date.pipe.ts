import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/app/store/models/task.model';

@Pipe({ name: 'taskOrderByDate' })
export class TaskOrderByDatePipe implements PipeTransform {
  transform(taks: Task[]) {
    return [...taks].sort((a, b) => b.created_at.localeCompare(a.created_at));
  }
}
