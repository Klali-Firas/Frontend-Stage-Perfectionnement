import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { validateurGuard } from './validateur.guard';

describe('validateurGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => validateurGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
