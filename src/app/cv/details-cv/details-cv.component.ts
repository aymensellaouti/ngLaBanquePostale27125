import { Component, inject, Input, OnInit } from "@angular/core";
import { Cv } from "../model/cv";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "src/app/config/app-routes.config";
import { AuthService } from "src/app/auth/service/auth.service";
import { catchError, EMPTY, Observable } from "rxjs";
import { toSignal } from "@angular/core/rxjs-interop";
import { AsyncPipe } from "@angular/common";


@Component({
    selector: 'app-details-cv',
    templateUrl: './details-cv.component.html',
    styleUrls: ['./details-cv.component.css'],
    imports: [AsyncPipe]
})
export class DetailsCvComponent implements OnInit{
  cvService = inject(CvService);
  acr = inject(ActivatedRoute);
  authService = inject(AuthService);
  router = inject(Router);
  @Input() id!: number;
  cv$!: Observable<Cv>;
  //cv = toSignal(this.cv$);
  ngOnInit() {
        console.log({ id: this.id });

        this.cv$ = this.cvService.getCvById(this.id).pipe(
          catchError((e) => {
            this.router.navigate([APP_ROUTES.cv]);
            return EMPTY;
          })
        );

  }
  constructor() {

    // .subscribe({
    //   next: (cv) => {
    //     this.cv = cv;
    //   },
    //   error: (e) => {
    //     this.router.navigate([APP_ROUTES.cv]);
    //   },
    // });
  }

  deleteCv(id: number) {
      this.cvService.deleteCvById(id).subscribe({
        next: () => {
          this.router.navigate([APP_ROUTES.cv]);
        },
        error: (e) => {
          console.log({ e });
        },
      });
    }
}
