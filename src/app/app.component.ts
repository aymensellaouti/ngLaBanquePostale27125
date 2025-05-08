import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LoggerInterface, LoggerProviderToken } from './provider tokens/logger.token';
import { LoggerService } from './services/logger.service';
import { SommeComponent } from "./signals/somme/somme.component";
import { HighlightDirective } from './directives/highlight.directive';
import { CardComponent } from './components/card/card.component';
import { RotatingCardComponent } from "./components/rotating-card/rotating-card.component";
import { Cv } from './cv/model/cv';

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['cv', cv.id]">route dynamique</a>
    <a routerLink="cv">route statique</a>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, RouterLink],
  standalone: true,
})
export class AppComponent {
  title = 'ngLaBanquePostale6125';
  acr = inject(ActivatedRoute);
  cv = new Cv();
  loggerServiceSimple = inject(LoggerService);
  loggerService: LoggerInterface[] = inject(LoggerProviderToken);
  hideMenu = this.acr.snapshot.data['hideMenu'] ?? false;
  constructor() {
    //console.log(this.acr.snapshot);
    this.loggerService.forEach((loggerService) => loggerService.logger('cc'));
  }
}
