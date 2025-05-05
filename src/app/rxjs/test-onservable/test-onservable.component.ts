import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-test-onservable',
    templateUrl: './test-onservable.component.html',
    styleUrls: ['./test-onservable.component.css'],
    imports: [AsyncPipe]
})
export class TestOnservableComponent {
  observable$: Observable<number>;
  toastr = inject(ToastrService);
  counter = 0;
  constructor() {
    // La création du flux(observable) => 5 4 3 2 1
    this.observable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    // this.observable$.
    this.observable$.subscribe({
      next: (val) => {
        console.log(val);
        this.counter = val;
      },
    });
    // setTimeout(() => {
    const changedStream$ = this.observable$
    .pipe(
      // 5 4 3 2 1
      map(pourChaqueValeurRecu => pourChaqueValeurRecu * 3),
      // 15 12 9 6 3
      filter( data => !(data%2))
      // 12 6
    )
    .subscribe({
      next: (data) => {
        this.toastr.info('' + data);
      },
      complete: () => {
        this.toastr.error(' It s Over');
      },
      error: (e) => {}
    });

    // }, 3000)

  }
}
