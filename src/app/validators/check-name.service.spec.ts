import { TestBed } from '@angular/core/testing';

import { CheckNameService } from './check-name.service';

describe('CheckNameService', () => {
  let service: CheckNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
