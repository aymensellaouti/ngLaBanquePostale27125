import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-second',
    template: `
    <p>Je suis le second component</p>
  `,
    styles: [``],
    standalone: true,
})
export class SecondComponent {
  acr = inject(ActivatedRoute);
}
