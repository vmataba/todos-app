import {Component, Input, OnInit} from '@angular/core';
import {TASK_STATUS_COMPLETED, Task} from "../../../store/models/task.model";
import { Store } from '@ngrx/store';
import * as fromTakActions from '../../../store/actions/task.action '
import { take } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  @Input() task: Task | undefined

  completed: boolean = false

  constructor(private store: Store){}

  ngOnInit(): void {
      this.completed = this.task?.status == TASK_STATUS_COMPLETED
  }

  updateStatus(status: number){
    if (!this.task){
      return;
    }
    this.store.dispatch(fromTakActions.update({
     task: {
      ...this.task,
      status
     }
    }))
  }

  deleteTask(){
    if (!this.task?.id){
      return;
    }
    this.store.dispatch(fromTakActions.deleteTask({id: this.task.id}))
  }
  
}
