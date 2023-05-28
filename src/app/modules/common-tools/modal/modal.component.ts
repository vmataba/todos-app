import { Component, Input } from '@angular/core';

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

  @Input() opened: boolean = true

  @Input() size: string = SIZE_DEFAULT

  @Input() title: string = ''

  open(){
    this.opened = true
  }

  close(){
    this.opened = false
  }

}
