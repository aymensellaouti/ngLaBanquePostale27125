import { CanMatchFn } from '@angular/router';

export const matchRoleGuard: CanMatchFn = (route, segments) => {
  return true;
};
