import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {
  two = 'valeur initiale';

  changeTwo():void {
    this.two = 'une nouvelle valeur';
  }
}
