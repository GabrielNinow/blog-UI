import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./module/components/navbar/navbar.component";
import { PageHeaderComponent } from "./module/components/page-header/page-header.component";
import { CardComponent } from "./module/components/card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, NavbarComponent, PageHeaderComponent, CardComponent]
})
export class AppComponent {

}
