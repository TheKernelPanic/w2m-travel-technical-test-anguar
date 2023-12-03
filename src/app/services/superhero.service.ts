import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";
import Superhero from "@model/superhero";

export type Pageable<T> = {
  total: number;
  pages: number;
  current: number;
  elements: Array<T>;
}

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  private inMemory: Map<number, string> = new Map();

  public constructor(
  ) {
  }

  public listing(offset: number): Observable<Pageable<Superhero>> {
    return of({
      total: 500,
      pages: 15,
      current: offset,
      elements: [
        {id: 1, name: 'Superhero Nº1'},
        {id: 2, name: 'Superhero Nº2'},
        {id: 3, name: 'Superhero Nº3'},
        {id: 4, name: 'Superhero Nº4'},
        {id: 5, name: 'Superhero Nº5'},
      ]
    }).pipe(delay(1000));
  }

  public details(id: number): Observable<Superhero> {
    return of({
      id,
      name: 'Superhero'
    });
  }

  public update(superhero: Superhero): Observable<void> {
    return of().pipe(delay(1000));
  }

  public create(superhero: Superhero): Observable<void> {
    return of().pipe(delay(1000));
  }

  public delete(superhero: Superhero): Observable<void> {
    return of().pipe(delay(1000));
  }
}
