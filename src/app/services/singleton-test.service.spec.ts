import { TestBed } from '@angular/core/testing';

import { SingletonTestService } from './singleton-test.service';

describe('SingletonTestService', () => {
  let service: SingletonTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingletonTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
