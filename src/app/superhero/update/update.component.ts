import {Component, OnInit} from '@angular/core';
import Superhero from "@model/superhero";
import {SuperheroService} from "@services/superhero.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormFields} from "../../components/superhero-form/superhero-form.component";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  public superhero!: Superhero;

  public constructor(
    private superheroService: SuperheroService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.superheroService.details(this.route.snapshot.params['id']).subscribe({
      next: (superhero: Superhero|null) => {
        if (superhero === null) {
          this.router.navigate(['superhero', 'listing']);
        } else {
          this.superhero = superhero;
        }
      }
    });
  }

  public onSubmitForm(event: FormFields): void {
    this.superhero.name = event.name;
    this.superheroService.update(this.superhero).subscribe({
      next: _ => {
        this.router.navigate(['superhero', 'listing']);
      }
    });
  }
}
