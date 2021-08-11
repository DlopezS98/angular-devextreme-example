import { Component, OnInit } from '@angular/core';
import { Employee, EmployeesService } from 'src/app/shared/services/employees.service';

@Component({
  selector: 'app-employees-report-v2',
  templateUrl: './employees-report-v2.component.html',
  styleUrls: ['./employees-report-v2.component.scss']
})
export class EmployeesReportV2Component implements OnInit {
  employees: Employee[] = [];
  constructor(private service: EmployeesService) {
    this.employees = this.service.getEmployees();
  }

  ngOnInit(): void {
  }

  onSaving(event: any){
    event.cancel = true;
    console.log(event);
  }

}
