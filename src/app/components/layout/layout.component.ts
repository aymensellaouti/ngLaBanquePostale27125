import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    standalone: true,
    imports: [NavbarComponent]
})
export class LayoutComponent {

}
