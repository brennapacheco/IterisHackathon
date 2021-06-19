import { TestBed } from '@angular/core/testing';

import { LeisMulherService } from './leis-mulher.service';

describe('LeisMulherService', () => {
  let service: LeisMulherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeisMulherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
