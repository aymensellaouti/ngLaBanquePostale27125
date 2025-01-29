import {  inject, Injectable } from '@angular/core';
import { Cv } from '../model/cv';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APP_API } from 'src/app/config/app-api.config';
import { APP_CONST } from 'src/app/config/app-constantes.config';
import { AuthService } from 'src/app/auth/service/auth.service';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs = [
    new Cv(
      1,
      'Ville',
      'Thibaud',
      'dev',
      '123',
      'rotating_card_profile3.png',
      20
    ),
    new Cv(
      2,
      'Barbaud',
      'Ambre',
      'dev',
      '345',
      'rotating_card_profile.png',
      18
    ),
    new Cv(
      3,
      'Maitre',
      'maxime',
      'dev',
      '345',
      'rotating_card_profile2.png',
      18
    ),
    new Cv(
      4,
      'Mainguy',
      'valentin',
      'dev',
      '345',
      'rotating_card_profile3.png',
      18
    ),
    new Cv(5, 'Mignot', 'eric', 'dev', '345', 'rotating_card_profile3.png', 18),
    new Cv(6, 'MARTIN Y PASCUAL', 'Mathieu', 'dev', '345', '', 18),
    new Cv(7, 'TRESSOUS', 'Cédric', 'dev', '345', '               ', 18),
    new Cv(
      7,
      'LAFOURCADE',
      'Lucas',
      'dev',
      '345',
      'rotating_card_profile2.png',
      18
    ),
  ];
  http = inject(HttpClient);
  authService = inject(AuthService);
  /**
   * Le générateur du flux des cvs sélectionnés
   */
  private selectedCvSubject$ = new Subject<Cv>();

  /**
   * Le flux des cvs sélectionnés
   *
   * cv1, cv5, cv1, cv2, cv10 .....
   */
  selectedCv$: Observable<Cv> = this.selectedCvSubject$.asObservable();
  // get selectedCv$() {
  //   return this.selectedCvSubject$.asObservable();
  // }

  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }

  /**
   * Retourne la liste des cvs
   * @param id: number
   * @returns Cv
   */
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }

  /**
   * Supprime un cv avec son id
   * @param id: number
   * @returns Observable<{count: number}>
   */
  deleteCvById(id: number): Observable<{ count: number }> {
    return this.http.delete<{ count: number }>(APP_API.cv + id);
  }

  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getFakeCvs(): Cv[] {
    return this.cvs;
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id === +id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index != -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Ajoute un cv au flux des cvs sélectionnés
   * @param cv:Cv , c'est le cv sélectionné
   */
  selectCv(cv: Cv) {
    this.selectedCvSubject$.next(cv);
  }
}
