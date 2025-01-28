import {  Injectable } from '@angular/core';
import { Cv } from '../model/cv';


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

  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Cv[] {
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
    return null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    return false;
  }
}
