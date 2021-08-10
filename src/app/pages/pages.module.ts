import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { EmployeesReportComponent } from './employees-report/employees-report.component';



@NgModule({
  declarations: [
    PagesComponent,
    MainDashboardComponent,
    EmployeesReportComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
