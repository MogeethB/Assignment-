import { TestBed } from '@angular/core/testing';

import { FakeBackendServiceService } from './fake-backend-service.service';

describe('FakeBackendServiceService', () => {
  let service: FakeBackendServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeBackendServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
