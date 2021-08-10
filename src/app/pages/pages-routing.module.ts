import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EmployeesReportComponent } from './employees-report/employees-report.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'main',
    component: PagesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'dashboard', component: MainDashboardComponent },
      { path: 'employees-report', component: EmployeesReportComponent }
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
