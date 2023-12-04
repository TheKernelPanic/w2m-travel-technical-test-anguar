import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { SuperheroComponent } from './superhero.component';
import {SuperheroRoutingModule} from "./superhero-routing.module";
import {ComponentsModule} from "@components/components.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    ListingComponent,
    CreateComponent,
    UpdateComponent,
    SuperheroComponent
  ],
  imports: [
    CommonModule,
    SuperheroRoutingModule,
    ComponentsModule,
    MatButtonModule,
    MatIconModule
  ],
  bootstrap: [SuperheroComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SuperheroModule { }
