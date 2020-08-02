import { TestBed } from '@angular/core/testing';

import { PantryDialogueService } from './pantry-dialogue.service';

describe('PantryDialogueService', () => {
  let service: PantryDialogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PantryDialogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
