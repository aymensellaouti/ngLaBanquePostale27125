import { Component, inject, Input } from '@angular/core';
import { Cv } from '../model/cv';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { Observable } from 'rxjs';
import { ListComponent } from '../list/list.component';
import { CardCvComponent } from '../card-cv/card-cv.component';
import { EmbaucheComponent } from '../embauche/embauche.component';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Btc2UsdPipe } from '../../pipes/btc2-usd.pipe';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css'],
    imports: [
        ListComponent,
        CardCvComponent,
        EmbaucheComponent,
        CurrencyPipe,
        Btc2UsdPipe,
    ],
    standalone: true
})
export class CvComponent {
  private sayHelloService = inject(SayHelloService);

  cvService = inject(CvService);
  selectedCv$: Observable<Cv> = this.cvService.selectedCv$;
  selectedCv = this.cvService.selectedCv;
  @Input() cvs: Cv[] = [];
  todoService = inject(TodoService);
  // sayHelloService = new SayHelloService();
  toastr = inject(ToastrService);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);
  constructor() {
    this.toastr.info('cc je suis le cvComponent :D');
    this.sayHelloService.hello();
    // this.cvService.getCvs().subscribe({
    //   next: cvs => this.cvs = cvs,
    //   error: (e) => {
    //     this.cvs = this.cvService.getFakeCvs();
    //     this.toastr.error(`LEs données sont fictives, merci de contacter l'admin`)
    //   }
    // });
  }
}
