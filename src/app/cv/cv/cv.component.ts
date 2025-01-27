import { Component } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCv: Cv | null = null;
  cvs: Cv[] = [
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
    new Cv(
      6,
      'MARTIN Y PASCUAL',
      'Mathieu',
      'dev',
      '345',
      'rotating_card_profile2.png',
      18
    ),
    new Cv(
      7,
      'TRESSOUS',
      'Cédric',
      'dev',
      '345',
      'rotating_card_profile3.png',
      18
    ),
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
}
