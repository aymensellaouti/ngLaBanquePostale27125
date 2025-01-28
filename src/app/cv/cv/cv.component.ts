import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCv: Cv | null = null;
  cvs: Cv[] = [
    new Cv(
      1,
      'Ville',
      'Thibaud',
      'dev',
      '123',
      'rotating_card_profile3.png',
      20
    ),
    new Cv(
      2,
      'Barbaud',
      'Ambre',
      'dev',
      '345',
      'rotating_card_profile.png',
      18
    ),
    new Cv(
      3,
      'Maitre',
      'maxime',
      'dev',
      '345',
      'rotating_card_profile2.png',
      18
    ),
    new Cv(
      4,
      'Mainguy',
      'valentin',
      'dev',
      '345',
      'rotating_card_profile3.png',
      18
    ),
    new Cv(5, 'Mignot', 'eric', 'dev', '345', 'rotating_card_profile3.png', 18),
    new Cv(6, 'MARTIN Y PASCUAL', 'Mathieu', 'dev', '345', '', 18),
    new Cv(7, 'TRESSOUS', 'Cédric', 'dev', '345', '               ', 18),
    new Cv(
      7,
      'LAFOURCADE',
      'Lucas',
      'dev',
      '345',
      'rotating_card_profile2.png',
      18
    ),
  ];
  todoService = inject(TodoService);
  // sayHelloService = new SayHelloService();
  toastr = inject(ToastrService);
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService
  ) {
    this.toastr.info('cc je suis le cvComponent :D');
    this.sayHelloService.hello();
  }
}
