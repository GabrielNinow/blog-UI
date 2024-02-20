import { Component } from '@angular/core';
import { InputSearchComponent } from "../input-search/input-search.component";
import { MenuBarComponent } from "../menu-bar/menu-bar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [InputSearchComponent, MenuBarComponent, CommonModule]
})
export class NavbarComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;

    console.log(this.isOpen)
  }
}
