import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/app/store/models/task.model';

@Pipe({ name: 'orderTasks' })
export class TaskOrderingPipe implements PipeTransform {
  transform(taks: Task[]) {
    return [...taks].sort((a, b) => a.status - b.status);
  }
}
