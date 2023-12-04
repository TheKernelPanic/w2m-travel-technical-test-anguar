import {Component, OnInit} from '@angular/core';
import Superhero from "@model/superhero";
import {SuperheroService} from "@services/superhero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  public superheroes: Superhero[] = [];

  public constructor(
    private superheroService: SuperheroService,
    private router: Router
  ) {
  }

  public ngOnInit() {
    this.superheroService.listing().subscribe({
      next: (superheroes: Superhero[]) => {
        this.superheroes = superheroes;
      }
    });
  }

  public deleteAction(superhero: Superhero): void {
    this.superheroService.delete(superhero).subscribe({
      next: _ => {
        this.superheroes = this.superheroes.filter(element => element.id !== superhero.id);
      }
    });
  }

  public updateAction(superhero: Superhero): void {
    this.router.navigate(['superhero', 'update', superhero.id]);
  }

  public createAction(): void {
    this.router.navigate(['superhero', 'create']);
  }
}
