import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Superhero from "@model/superhero";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

export type FormFields = {
  name: string;
}

@Component({
  selector: 'app-superhero-form',
  templateUrl: './superhero-form.component.html',
  styleUrls: ['./superhero-form.component.scss']
})
export class SuperheroFormComponent implements OnInit {

  @Input() public preset: Superhero|null = null;
  @Output() public submitted: EventEmitter<FormFields> = new EventEmitter();

  public form!: FormGroup;

  public constructor(
    formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(45)])
    });
  }

  public ngOnInit(): void {
    if (this.preset !== null) {
      this.form.get('name')?.setValue(this.preset.name);
    }
  }

  public submitHandler(): void {
    if (this.form.invalid) {
      return;
    }
    this.submitted.emit(this.form.getRawValue());
  }
}
