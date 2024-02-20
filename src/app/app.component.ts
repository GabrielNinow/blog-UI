import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./module/components/navbar/navbar.component";
import { PageHeaderComponent } from "./module/components/page-header/page-header.component";
import { CardComponent } from "./module/components/card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<router-outlet></router-outlet>`,
  imports: [CommonModule, RouterOutlet, NavbarComponent, PageHeaderComponent, CardComponent, RouterLink, RouterLinkActive, RouterModule]
})
export class AppComponent {

}
