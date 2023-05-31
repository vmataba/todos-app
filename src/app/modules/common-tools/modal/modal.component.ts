import { Component, EventEmitter, Input, Output } from '@angular/core';

export const SIZE_LG = 'lg'

export const SIZE_MEDIUM = 'md'

export const SIZE_SMALL = 'sm'

export const SIZE_DEFAULT = 'default'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() opened: boolean = false

  @Input() size: string = SIZE_DEFAULT

  @Input() title: string | undefined = ''

  @Output() close: EventEmitter<any> = new EventEmitter()

  openModal(){
    this.opened = true
  }

  closeModal(){
    this.opened = false
    this.fireOnCloseEvent()
  }

  fireOnCloseEvent(){
    this.close.emit({closed: true})
  }

}
