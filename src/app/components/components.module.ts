import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewWrapperComponent} from './view-wrapper/view-wrapper.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { SuperheroFormComponent } from './superhero-form/superhero-form.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {TableComponent} from "./table/table.component";


@NgModule({
  declarations: [
    ViewWrapperComponent,
    SuperheroFormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    ViewWrapperComponent,
    SuperheroFormComponent,
    TableComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {
}
