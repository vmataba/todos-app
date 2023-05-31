import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LabelsComponent } from './labels/labels.component';
import { LabelComponent } from './label/label.component';
import { LabelFormComponent } from './label-form/label-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from '../../store/reducers';
import { LabelService } from '../../services/label.service';
import { EffectsModule } from '@ngrx/effects';
import { LabelEffect } from '../../store/effects/label.effect';
import { CommonToolsModule } from '../common-tools/common-tools.module';
import { CommonModule } from '@angular/common';
import { ListingsComponent } from './listings/listings.component';
import { ListingComponent } from './listing/listing.component';
import { TaskComponent } from './task/task.component';
import { WelcomeNoteComponent } from './welcome-note/welcome-note.component';
import { ListingFormComponent } from './listing-form/listing-form.component';
import { ListingEffect } from 'src/app/store/effects/listing.effect';
import { TaskEffect } from 'src/app/store/effects/task.effect';
import { ListingService } from 'src/app/services/listing.service';
import { TaskService } from 'src/app/services/task.service';
import { FilterPipe } from 'src/app/common/pipes/filter.pipe';
import { TaskOrderByDatePipe } from 'src/app/common/pipes/task-order-by-date.pipe';
import { TaskOrderByStatusPipe } from 'src/app/common/pipes/task-order-by-status.pipe';
import { TaskFormComponent } from './task-form/task-form.component';

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
    WelcomeNoteComponent,
    ListingFormComponent,
    TaskFormComponent,
    FilterPipe,
    TaskOrderByDatePipe,
    TaskOrderByStatusPipe
    
  ],
  imports: [
    ReactiveFormsModule,
    StoreModule.forFeature('todos', todosReducer),
    EffectsModule.forFeature([LabelEffect, ListingEffect, TaskEffect]),
    CommonToolsModule,
    CommonModule,
  ],
  providers: [LabelService, ListingService, TaskService],
})
export class TodoModule {}
