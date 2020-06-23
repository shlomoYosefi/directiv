import { TestBed } from '@angular/core/testing';

import { NyserviesService } from './nyservies.service';

describe('NyserviesService', () => {
  let service: NyserviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NyserviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
