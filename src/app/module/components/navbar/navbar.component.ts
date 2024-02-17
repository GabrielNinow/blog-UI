import { Component } from '@angular/core';
import { InputSearchComponent } from "../input-search/input-search.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [InputSearchComponent]
})
export class NavbarComponent {

}
