import { TestBed } from '@angular/core/testing';

import { JobResolverService } from './job-resolver.service';

describe('JobResolverService', () => {
  let service: JobResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
