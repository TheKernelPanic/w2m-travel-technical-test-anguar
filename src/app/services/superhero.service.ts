import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";
import Superhero from "@model/superhero";
import {Pageable, PaginatorService} from "@services/paginator.service";


@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  private inMemory: Superhero[] = [];

  public constructor(
    private paginatorService: PaginatorService<Superhero>
  ) {
  }

  public listing(offset: number): Observable<Pageable<Superhero>> {

    this.paginatorService.setCollection(this.inMemory);

    return of(this.paginatorService.getPage(offset))
      .pipe(delay(1000));
  }

  public details(id: number): Observable<Superhero|null> {

    const found: Superhero|undefined = this.inMemory.find((superhero: Superhero) => {
      return superhero.id === id;
    });
    return of(found ?? null);
  }

  public update(superhero: Superhero): Observable<void> {

    this.inMemory.forEach((element: Superhero) => {
      if (element.id === superhero.id) {
        element = superhero;
      }
    });
    return of()
      .pipe(delay(1000));
  }

  public create(superhero: Superhero): Observable<number> {

    const newId: number = this.inMemory.length + 1;
    superhero.id = newId
    this.inMemory.push(superhero);

    return of(newId)
      .pipe(delay(1000));
  }

  public delete(superhero: Superhero): Observable<void> {

    this.inMemory = this.inMemory.filter((superhero: Superhero) => {
      return superhero.id !== superhero.id;
    });
    return of()
      .pipe(delay(1000));
  }
}
