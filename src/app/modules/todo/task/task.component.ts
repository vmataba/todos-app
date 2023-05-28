import {Component, Input, OnInit} from '@angular/core';
import {TASK_STATUS_COMPLETED, Task} from "../../../store/models/task.model";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent{

  @Input() task: Task | undefined

  completed: boolean = false
  
}
