import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvService = inject(CvService);
  selectedCv$: Observable<Cv> = this.cvService.selectedCv$;
  cvs: Cv[] = [];
  todoService = inject(TodoService);
  // sayHelloService = new SayHelloService();
  toastr = inject(ToastrService);
  constructor(
    private sayHelloService: SayHelloService
  ) {
    this.toastr.info('cc je suis le cvComponent :D');
    this.sayHelloService.hello();
    this.cvService.getCvs().subscribe({
      next: cvs => this.cvs = cvs,
      error: (e) => {
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.error(`LEs données sont fictives, merci de contacter l'admin`)
      }
    });
  }
}
