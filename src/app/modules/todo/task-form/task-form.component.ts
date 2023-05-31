import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Listing } from 'src/app/store/models/listing.model';
import { Task } from 'src/app/store/models/task.model';
import * as fromListingSelectors from 'src/app/store/selectors/listing.selector';
import * as fromTaskActions from 'src/app/store/actions/task.action ';
import * as fromListingActions from 'src/app/store/actions/listing.action';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  form: FormGroup;

  @Input() task: Task | undefined;

  @Input() listingId: number | undefined;


  constructor(private fb: FormBuilder, private store: Store) {
    this.form = fb.group({
      id: [this.task?.id],
      description: [this.task?.description, Validators.required],
    });
  }

  get description() {
    return this.form.get('description');
  }

  reset(){
    this.form.patchValue({
      ...this.form.value,
      description: ''
    })
  }

  save() {
    if (this.form.invalid){
      return;
    }
    if (!this.listingId) {
      return;
    }
    if (!this.task?.id) {
      this.store.dispatch(
        fromTaskActions.add({
          task: {
            ...this.form.value,
            listingId: this.listingId,
          },
        })
      );
      this.reset()
      return;
    }
    this.store.dispatch(
      fromTaskActions.update({
        task: {
          ...this.task,
          ...this.form.value,
          listingId: this.listingId
        },
      })
    );
    this.reset()
  }
}
