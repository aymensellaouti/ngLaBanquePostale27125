import { Component } from '@angular/core';
import { RainbowDirective } from '../../directives/rainbow.directive';
import { HighlightDirective } from '../../directives/highlight.directive';
import { SecondComponent } from '../second/second.component';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css'],
    imports: [
        RainbowDirective,
        HighlightDirective,
        SecondComponent,
    ]
})
export class FirstComponent {
  name = 'aymen';

  /**
   * Représente le fait d'afficher ou non l'élément
   */
  isHidden = false;

  message = '';
  constructor() {
    // setTimeout(
    //   () => {
    //   }, 3000
    // )
  }
  showHide() {
    this.isHidden = !this.isHidden;
  }
  setMessage(newMessage: string) {
    this.message = newMessage;
  }
}
