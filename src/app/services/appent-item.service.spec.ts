import { TestBed } from '@angular/core/testing';

import { AppentItemService } from './appent-item.service';

describe('AppentItemService', () => {
  let service: AppentItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppentItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
