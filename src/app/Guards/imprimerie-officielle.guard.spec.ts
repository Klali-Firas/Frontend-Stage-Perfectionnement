import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { imprimerieOfficielleGuard } from './imprimerie-officielle.guard';

describe('imprimerieOfficielleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => imprimerieOfficielleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
