import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "src/app/config/app-routes.config";
import { AuthService } from "src/app/auth/service/auth.service";


@Component({
    selector: 'app-details-cv',
    templateUrl: './details-cv.component.html',
    styleUrls: ['./details-cv.component.css'],
    standalone: true,
    imports: [],
})
export class DetailsCvComponent {
  cv: Cv | null = null;
  acr = inject(ActivatedRoute);
  cvService = inject(CvService);
  router = inject(Router);
  authService = inject(AuthService);

  constructor() {
    const id = this.acr.snapshot.params['id'];
    this.cvService.getCvById(id).subscribe({
      next: (cv) => {
        this.cv = cv;
      },
      error: (e) => {
        this.router.navigate([APP_ROUTES.cv]);
      },
    });
  }

  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCvById(this.cv.id).subscribe({
        next: () => {
          this.router.navigate([APP_ROUTES.cv]);
        },
        error: (e) => {
          console.log({ e });
        },
      });
    }
  }
}
