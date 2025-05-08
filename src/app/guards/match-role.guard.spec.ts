import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { matchRoleGuard } from './match-role.guard';

describe('matchRoleGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => matchRoleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
