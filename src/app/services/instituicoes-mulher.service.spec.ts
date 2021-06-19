import { TestBed } from '@angular/core/testing';

import { InstituicoesMulherService } from './instituicoes-mulher.service';

describe('InstituicoesMulherService', () => {
  let service: InstituicoesMulherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstituicoesMulherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
