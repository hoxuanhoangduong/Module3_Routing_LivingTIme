import { TestBed } from '@angular/core/testing';

import { DateUtil.Service } from './date-util..service';

describe('DateUtil.Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateUtil.Service = TestBed.get(DateUtil.Service);
    expect(service).toBeTruthy();
  });
});
