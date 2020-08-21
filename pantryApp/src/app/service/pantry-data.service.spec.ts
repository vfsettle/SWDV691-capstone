import { TestBed } from '@angular/core/testing';

import { PantryDataService } from './pantry-data.service';

describe('PantryDataService', () => {
  let service: PantryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PantryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
