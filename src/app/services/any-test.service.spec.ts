import { TestBed } from '@angular/core/testing';

import { AnyTestService } from './any-test.service';

describe('AnyTestService', () => {
  let service: AnyTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnyTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
