import {Component, Input, OnInit} from '@angular/core';
import {Listing} from "../../../store/models/listing.model";
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/store/models/task.model';
import * as fromTaskSelector from '../../../store/selectors/task.selector'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit{

  @Input() listing: Listing | undefined

  tasks$: Observable<Task[]>

  inViewMode:boolean = false
  
  constructor(private store: Store){
    this.tasks$ = of([])
  }

  ngOnInit(): void {
      if (!this.listing?.id){
        return;
      }
      this.tasks$ = this.store.select(fromTaskSelector.getTasks(this.listing.id))
  }

  toggleViewMode(){
    this.inViewMode = !this.inViewMode
  }

}
