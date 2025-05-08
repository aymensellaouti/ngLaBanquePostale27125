import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv';
import { NgClass } from '@angular/common';
import { ItemCvComponent } from '@aymen/cv';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    imports: [NgClass, ItemCvComponent]
})
export class ListComponent {
  @Input()
  cvs: Cv[] = [];
  // @Output()
  // forwardCv = new EventEmitter<Cv>();
}
