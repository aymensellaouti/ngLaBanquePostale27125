import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-fils',
    templateUrl: './fils.component.html',
    styleUrls: ['./fils.component.css'],
    standalone: true
})
export class FilsComponent {
  @Input({
    alias: 'message'
  })
  messageDePapa = "pour le moment j'ai rien reçu :D";
  @Output()
  sendMessageToPapa = new EventEmitter<string>();
  onSendMessageToPapa() {
    this.sendMessageToPapa.emit("Bien sur")
  }
}
