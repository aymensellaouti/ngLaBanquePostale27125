import { Component, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Credentials } from '../dto/credentials.dto';
import { APP_ROUTES } from 'src/app/config/app-routes.config';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [FormsModule]
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toaster = inject(ToastrService);

  login(credentials: Credentials) {
    this.authService.login(credentials).subscribe({
      next: (isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigate([APP_ROUTES.cv]);
        } else {
          this.toaster.error('veuillez vérifier vos credentials');
        }
      },
    });
  }
}
