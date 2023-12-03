import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { SuperheroComponent } from './superhero.component';
import {SuperheroRoutingModule} from "./superhero-routing.module";
import {ComponentsModule} from "../components/components.module";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import { TableComponent } from './listing/table/table.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    ListingComponent,
    CreateComponent,
    UpdateComponent,
    SuperheroComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SuperheroRoutingModule,
    ComponentsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule
  ],
  bootstrap: [SuperheroComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SuperheroModule { }
