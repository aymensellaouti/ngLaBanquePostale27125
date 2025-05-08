import { AuthInterceptorProvider } from './app/auth/interceptors/auth.interceptor';
import { LoggerProviderToken } from './app/provider tokens/logger.token';
import { LoggerService } from './app/services/logger.service';
import { Logger2Service } from './app/services/logger2.service';
import { provideRouter, withComponentInputBinding, withDebugTracing } from '@angular/router';
import { routes } from './app/app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
          BrowserModule,
          ToastrModule.forRoot()
        ),
        AuthInterceptorProvider,
        {
            provide: LoggerProviderToken,
            useClass: LoggerService,
            multi: true,
        },
        {
            provide: LoggerProviderToken,
            useClass: Logger2Service,
            multi: true,
        },
        provideRouter(
          routes,
          withDebugTracing(),
          withComponentInputBinding()
        ),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
    ]
})
  .catch(err => console.error(err));
