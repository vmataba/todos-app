import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/app/store/models/task.model';

@Pipe({ name: 'taskOrderByStatus' })
export class TaskOrderByStatusPipe implements PipeTransform {
  transform(tasks: Task[]) {
    return [...tasks].sort((a, b) => a.status - b.status);
  }
}
