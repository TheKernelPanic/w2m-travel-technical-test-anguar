import {Pageable, PaginatorService} from './paginator.service';

type FixtureExample = {
  name: string;
};

describe('PaginatorService', () => {

  it('Should paginate correctly', () => {

    const paginatorService: PaginatorService<FixtureExample> = new PaginatorService();
    const collection: Array<FixtureExample> = [];
    for (let i: number = 1; i <= 62; i++) {
      collection.push({name: i.toString()});
    }
    paginatorService.setCollection(collection);
    let pageable: Pageable<FixtureExample> = paginatorService.getPage(1);
    expect(pageable.pages).toBe(13);
    expect(pageable.elements.length).toBe(5);
    expect(pageable.total).toBe(pageable.total);

    pageable = paginatorService.getPage(13);
    expect(pageable.elements.length).toBe(2);
    expect(pageable.elements[1].name).toBe('62');

  });
});
