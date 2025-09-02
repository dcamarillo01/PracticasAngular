import { TestBed } from '@angular/core/testing';

import { TheMovieDBApiService } from './the-movie-dbapi.service';

describe('TheMovieDBApiService', () => {
  let service: TheMovieDBApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheMovieDBApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
