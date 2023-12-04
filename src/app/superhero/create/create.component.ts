import { Component } from '@angular/core';
import {FormFields} from "../../components/superhero-form/superhero-form.component";
import {SuperheroService} from "@services/superhero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  public constructor(
    private superheroService: SuperheroService,
    private router: Router
  ) {
  }

  public onSubmitForm(event: FormFields): void {
    this.superheroService.create(event).subscribe({
      next: _ => {
        this.router.navigate(['superhero', 'listing']);
      }
    })
  }
}
