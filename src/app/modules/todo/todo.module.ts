import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LabelsComponent} from './labels/labels.component';
import {LabelComponent} from './label/label.component';
import {LabelFormComponent} from './label-form/label-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {todosReducer} from "../../store/reducers";
import {LabelService} from "../../services/label.service";
import {EffectsModule} from "@ngrx/effects";
import {LabelEffect} from "../../store/effects/label.effect";
import {CommonToolsModule} from "../common-tools/common-tools.module";
import {CommonModule} from "@angular/common";
import { ListingsComponent } from './listings/listings.component';
import { ListingComponent } from './listing/listing.component';
import { TaskComponent } from './task/task.component';
import { WelcomeNoteComponent } from './welcome-note/welcome-note.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    LabelsComponent,
    LabelComponent,
    LabelFormComponent,
    ListingsComponent,
    ListingComponent,
    TaskComponent,
    WelcomeNoteComponent
  ],
  imports: [
    ReactiveFormsModule,
    StoreModule.forFeature('todos', todosReducer),
    EffectsModule.forFeature([
      LabelEffect
    ]),
    CommonToolsModule,
    CommonModule
  ],
  providers: [
    LabelService
  ]
})
export class TodoModule {
}