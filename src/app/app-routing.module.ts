import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SuperheroComponent} from "@superhero/superhero.component";

const routes: Routes = [
  {
    path: 'superhero',
    component: SuperheroComponent,
    loadChildren: () => import('@superhero/superhero.module').then(m => m.SuperheroModule)
  },
  {
    path: '',
    redirectTo: 'superhero',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
