import { TestBed } from '@angular/core/testing';

import { KnjiznicaService } from './knjiznica.service';

describe('RentService', () => {
  let service: KnjiznicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnjiznicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
