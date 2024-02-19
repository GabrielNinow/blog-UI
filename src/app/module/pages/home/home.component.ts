import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [PageHeaderComponent, NavbarComponent, CardComponent]
})
export class HomeComponent {

}
