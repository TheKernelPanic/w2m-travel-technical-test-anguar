import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmationMessageComponent } from './delete-confirmation-message.component';

describe('DeleteConfirmationMessageComponent', () => {
  let component: DeleteConfirmationMessageComponent;
  let fixture: ComponentFixture<DeleteConfirmationMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteConfirmationMessageComponent]
    });
    fixture = TestBed.createComponent(DeleteConfirmationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
