import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ReportComponent } from '../../components/report/report.component';
import { ReportHeaderComponent } from "../../components/report-header/report-header.component";

@Component({
  selector: 'app-manage-reports',
  standalone: true,
  templateUrl: './manage-reports.component.html',
  styleUrl: './manage-reports.component.scss',
  imports: [PageHeaderComponent, NavbarComponent, FooterComponent, ReportComponent, ReportHeaderComponent]
})
export class ManageReportsComponent {

}
