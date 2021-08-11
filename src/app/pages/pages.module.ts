import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { EmployeesReportComponent } from './employees-report/employees-report.component';
import { SharedModule } from '../shared/shared.module';
import { DevexpressComponentsModule } from '../shared/devexpress-components/devexpress-components.module';
import { EmployeesReportV2Component } from './employees-report-v2/employees-report-v2.component';
import { MainEmployeeReportComponent } from './main-employee-report/main-employee-report.component';



@NgModule({
  declarations: [
    PagesComponent,
    MainDashboardComponent,
    EmployeesReportComponent,
    EmployeesReportV2Component,
    MainEmployeeReportComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    DevexpressComponentsModule
  ]
})
export class PagesModule { }
