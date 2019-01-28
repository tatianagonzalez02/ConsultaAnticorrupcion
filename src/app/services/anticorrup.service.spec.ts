import { TestBed } from '@angular/core/testing';

import { AnticorrupService } from './anticorrup.service';

describe('AnticorrupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnticorrupService = TestBed.get(AnticorrupService);
    expect(service).toBeTruthy();
  });
});
