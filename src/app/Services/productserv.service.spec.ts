import { TestBed } from '@angular/core/testing';

import { ProductservService } from './productserv.service';

describe('ProductservService', () => {
  let service: ProductservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
