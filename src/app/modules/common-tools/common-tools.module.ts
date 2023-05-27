import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule, NgIf} from '@angular/common';
import { ErrorNoteComponent } from './error-note/error-note.component';



@NgModule({
  declarations: [
    ErrorNoteComponent
  ],
  exports: [
    ErrorNoteComponent
  ],
  imports: [
    CommonModule,
    AsyncPipe,
    NgIf
  ]
})
export class CommonToolsModule { }
