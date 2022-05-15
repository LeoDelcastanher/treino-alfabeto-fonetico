import { TestBed } from '@angular/core/testing';

import { AlfaFonService } from './alfa-fon.service';

describe('AlfaFonService', () => {
  let service: AlfaFonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlfaFonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
