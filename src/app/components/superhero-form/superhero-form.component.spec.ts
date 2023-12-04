import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroFormComponent } from './superhero-form.component';
import {MatFormField} from "@angular/material/form-field";

describe('SuperheroFormComponent', () => {
  let component: SuperheroFormComponent;
  let fixture: ComponentFixture<SuperheroFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SuperheroFormComponent,
        MatFormField
      ],
    });
    fixture = TestBed.createComponent(SuperheroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
