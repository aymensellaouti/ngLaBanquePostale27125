import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggerInterface, LoggerProviderToken } from './provider tokens/logger.token';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngLaBanquePostale6125';
  acr = inject(ActivatedRoute);
  loggerServiceSimple = inject(LoggerService);
  loggerService: LoggerInterface[] = inject(LoggerProviderToken);
  hideMenu = this.acr.snapshot.data['hideMenu'] ?? false;
  constructor() {
    //console.log(this.acr.snapshot);
    this.loggerService.forEach(
      loggerService => loggerService.logger('cc')
    );
  }
}
