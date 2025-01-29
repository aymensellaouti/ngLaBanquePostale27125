import { Directive, HostBinding, HostListener } from '@angular/core';

/**
 * Cette directive va changer aléatoirement la couleur et la
 * bordure de l'input de type texte ciblé
 */
@Directive({
    selector: 'input[appRainbow][type=text]',
    standalone: true
})
export class RainbowDirective {
  // Quellet propriétés je veux gérer
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') bc = 'black';
  constructor() {
    console.log('rainbow');

   }
// Quel comportement faire
  @HostListener('keyup')
  onKeyUp() {
    this.color = this.bc = this.getRandomColor()
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
