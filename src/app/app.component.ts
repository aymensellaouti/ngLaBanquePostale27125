import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngLaBanquePostale6125';
  acr = inject(ActivatedRoute);
  hideMenu = this.acr.snapshot.data['hideMenu'] ?? false;
  constructor() {
    console.log(this.acr.snapshot);

  }
}
