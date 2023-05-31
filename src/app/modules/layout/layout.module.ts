import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeSwitchComponent } from './mode-switch/mode-switch.component';
import { StoreModule } from '@ngrx/store';
import { layoutReducer } from 'src/app/store/reducers/layout.reducer';



@NgModule({
  declarations: [
    ModeSwitchComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('layout',layoutReducer)
  ],
  exports: [
    ModeSwitchComponent
  ]
})
export class LayoutModule { }
