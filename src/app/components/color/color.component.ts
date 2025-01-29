import { Component } from '@angular/core';

@Component({
    selector: 'app-color',
    templateUrl: './color.component.html',
    styleUrls: ['./color.component.css'],
    standalone: true,
})
export class ColorComponent {
  /**
   * La couleur par défaut de la div
   */
  defaultColor = 'red';
  /**
   * La couleur de la div
   */
  color = this.defaultColor;

  changeColor(newColorInput: HTMLInputElement): void {
    this.color = newColorInput.value;
    newColorInput.value = '';
  }

  reset(): void {
    this.color = this.defaultColor;
  }
}
