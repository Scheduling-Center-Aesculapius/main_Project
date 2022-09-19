import { TestBed } from '@angular/core/testing';

import { ProfessionalsServiceService } from './professionals.service';

describe('ProfessionalsServiceService', () => {
  let service: ProfessionalsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionalsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
