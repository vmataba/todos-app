import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule, NgIf} from '@angular/common';
import { ErrorNoteComponent } from './error-note/error-note.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    ErrorNoteComponent,
    ModalComponent
  ],
  exports: [
    ErrorNoteComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    AsyncPipe,
    NgIf
  ]
})
export class CommonToolsModule { }
