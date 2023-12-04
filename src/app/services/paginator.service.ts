import { Injectable } from '@angular/core';

export type Pageable<T> = {
  total: number;
  pages: number;
  current: number;
  elements: Array<T>;
}

@Injectable({
  providedIn: 'root'
})
export class PaginatorService<T> {

  private collection: Array<T> = [];
  private elementsPerPage: number = 5;

  public getPage(page: number): Pageable<T> {
    return {
      total: this.collection.length,
      pages: Math.ceil(this.collection.length / this.elementsPerPage),
      current: page,
      elements: this.getElements(page)
    }
  }

  public setCollection(collection: Array<T>): void {
    this.collection = collection;
  }

  private getElements(page: number): Array<T> {

    const end: number = page * this.elementsPerPage
    return this.collection.slice(end - this.elementsPerPage, end);
  }
}
