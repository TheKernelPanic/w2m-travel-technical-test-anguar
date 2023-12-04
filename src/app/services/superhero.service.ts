import {Injectable} from '@angular/core';
import {delay, Observable, of, tap} from "rxjs";
import Superhero from "@model/superhero";
import {LoaderStateService} from "@services/loader-state.service";


@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  private inMemory: Superhero[] = [];

  public constructor(
    private loaderStateService: LoaderStateService
  ) {
  }

  public listing(): Observable<Superhero[]> {

    this.loaderStateService.setLoaderState(true, '/listing');

    return of(this.inMemory)
      .pipe(delay(1000))
      .pipe(tap(
        () => this.loaderStateService.setLoaderState(false, '/listing')
      ));
  }

  public details(id: number): Observable<Superhero|null> {

    this.loaderStateService.setLoaderState(true, '/details');
    const found: Superhero|undefined = this.inMemory.find((superhero: Superhero) => {
      return superhero.id === id;
    });
    return of(found !== undefined ? found : null)
      .pipe(delay(1000))
      .pipe(tap(
        () => this.loaderStateService.setLoaderState(false, '/details')
      ));
  }

  public update(superhero: Superhero): Observable<{}> {

    this.loaderStateService.setLoaderState(true, '/update');
    this.inMemory.forEach((element: Superhero, index: number) => {
      if (element.id === superhero.id) {
        this.inMemory[index] = superhero;
      }
    });
    return of({})
      .pipe(delay(1000))
      .pipe(tap(
        () =>  this.loaderStateService.setLoaderState(false, '/update')
      ));
  }

  public create(superhero: Superhero): Observable<number> {

    this.loaderStateService.setLoaderState(true, '/create');
    const newId: number = this.inMemory.length + 1;
    superhero.id = newId;
    this.inMemory.push(superhero);

    return of(newId)
      .pipe(delay(1000))
      .pipe(tap(
        () => this.loaderStateService.setLoaderState(false, '/create')
      ));
  }

  public delete(superhero: Superhero): Observable<{}> {

    this.loaderStateService.setLoaderState(true, '/delete');
    this.inMemory = this.inMemory.filter((element: Superhero) => {
      return element.id !== superhero.id;
    });
    return of({})
      .pipe(delay(1000))
      .pipe(tap(
        () => this.loaderStateService.setLoaderState(false, '/delete')
      ));
  }
}
