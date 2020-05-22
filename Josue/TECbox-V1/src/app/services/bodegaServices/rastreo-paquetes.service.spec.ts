import { TestBed } from '@angular/core/testing';

import { RastreoPaqService } from './rastreo-paquetes.service';

describe('ProductService', () => {
  let service: RastreoPaqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RastreoPaqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
