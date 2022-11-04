import { TestBed } from '@angular/core/testing';

import { LoginservService } from './loginserv.service';

describe('LoginservService', () => {
  let service: LoginservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
