import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNoteComponent } from './error-note.component';

describe('ErrorNoteComponent', () => {
  let component: ErrorNoteComponent;
  let fixture: ComponentFixture<ErrorNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
