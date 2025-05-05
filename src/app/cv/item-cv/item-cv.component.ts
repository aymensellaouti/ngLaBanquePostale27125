import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { NgStyle } from '@angular/common';
import { DefaultImagePipe } from '../pipes/default-image.pipe';

@Component({
    selector: 'app-item-cv',
    templateUrl: './item-cv.component.html',
    styleUrls: ['./item-cv.component.css'],
    imports: [NgStyle, DefaultImagePipe]
})
export class ItemCvComponent {
  @Input({
    required: true,
  })
  cv!: Cv;
  // @Output()
  // selectCv = new EventEmitter<Cv>();
  @Input() size = 50;
  cvService = inject(CvService);
  onSelectCv() {
    // this.selectCv.emit(this.cv);
    this.cvService.selectCv(this.cv);
  }
}
