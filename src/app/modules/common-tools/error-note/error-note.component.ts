import {Component, Input} from '@angular/core';
import {SystemError} from "../../../store/models/system-error.model";

@Component({
  selector: 'app-error-note',
  templateUrl: './error-note.component.html',
  styleUrls: ['./error-note.component.css']
})
export class ErrorNoteComponent {

  @Input() error: SystemError | undefined
}
