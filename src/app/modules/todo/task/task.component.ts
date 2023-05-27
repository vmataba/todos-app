import {Component, Input} from '@angular/core';
import {Task} from "../../../store/models/task.model";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task: Task | undefined
}
