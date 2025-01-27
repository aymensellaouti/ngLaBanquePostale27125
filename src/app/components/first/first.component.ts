import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
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
