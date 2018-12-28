import { TestBed } from '@angular/core/testing';

import { HeroTaxReturnService } from './hero-tax-return.service';

describe('HeroTaxReturnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroTaxReturnService = TestBed.get(HeroTaxReturnService);
    expect(service).toBeTruthy();
  });
});
