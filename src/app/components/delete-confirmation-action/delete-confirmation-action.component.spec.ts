import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmationActionComponent } from './delete-confirmation-action.component';
import {MatDialogModule} from "@angular/material/dialog";

describe('DeleteConfirmationActionComponent', () => {
  let component: DeleteConfirmationActionComponent;
  let fixture: ComponentFixture<DeleteConfirmationActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DeleteConfirmationActionComponent
      ],
      imports: [
        MatDialogModule
      ]
    });
    fixture = TestBed.createComponent(DeleteConfirmationActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
