import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-card-cv',
  templateUrl: './card-cv.component.html',
  styleUrls: ['./card-cv.component.css']
})
export class CardCvComponent {
  @Input()
  cv: Cv | null = null;
}
