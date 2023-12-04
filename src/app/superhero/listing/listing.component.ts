import {Component, OnInit} from '@angular/core';
import Superhero from "@model/superhero";
import {SuperheroService} from "@services/superhero.service";
import {Router} from "@angular/router";
import {Pageable} from "@services/paginator.service";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  public currentPage: Pageable<Superhero> = {
    total: 0,
    pages: 0,
    current: 1,
    elements: []
  };

  public constructor(
    private superheroService: SuperheroService,
    private router: Router
  ) {
  }

  public ngOnInit() {
    this.superheroService.listing(this.currentPage.current).subscribe({
      next: (pageable: Pageable<Superhero>) => {
        this.currentPage = pageable;
      }
    });
  }

  public deleteAction(superhero: Superhero): void {
    console.log(superhero);
  }

  public updateAction(superhero: Superhero): void {
    this.router.navigate(['superhero', 'update', superhero.id]);
  }
}
