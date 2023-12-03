import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListingComponent} from "./listing/listing.component";
import {CreateComponent} from "./create/create.component";
import {UpdateComponent} from "./update/update.component";

const routes: Routes = [
  {
    path: 'listing',
    component: ListingComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  },
  {
    path: '',
    redirectTo: 'listing',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SuperheroRoutingModule { }
