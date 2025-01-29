import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-somme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './somme.component.html',
  styleUrl: './somme.component.css'
})
export class SommeComponent {
  x = signal(5);
  y = signal(4);
  z = computed(() => {
    console.log('In computed');

    return this.x() + this.y()

  });
  //doubleZ = computed(() => 2 * this.z())

}
