import { ResolveFn } from '@angular/router';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { inject } from '@angular/core';

export const cvsResolverResolver: ResolveFn<Cv[]> = (route, state) => {
  console.log('Resolve CVS');

  return inject(CvService).getCvs();
};
