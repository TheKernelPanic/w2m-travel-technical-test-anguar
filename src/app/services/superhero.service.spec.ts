import { TestBed } from '@angular/core/testing';

import { SuperheroService } from './superhero.service';

describe('SuperheroService', () => {
  let service: SuperheroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperheroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create superhero', () => {
    service.create({name: 'Example'}).subscribe({
      next: (id: number) => {
        expect(id).toBe(1);
      }
    });
  });
});
