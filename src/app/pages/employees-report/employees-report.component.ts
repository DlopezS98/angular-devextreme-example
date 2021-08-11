import { Component, OnInit } from '@angular/core';
import { Employee, EmployeesService } from 'src/app/shared/services/employees.service';
import * as Excel from 'exceljs';
import { saveAs } from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';

@Component({
  selector: 'app-employees-report',
  templateUrl: './employees-report.component.html',
  styleUrls: ['./employees-report.component.scss']
})
export class EmployeesReportComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployee!: Employee;
  constructor(private service: EmployeesService) { 
    this.employees = this.service.getEmployees();
    this.selectEmployee = this.selectEmployee.bind(this);
  }

  ngOnInit(): void {
  }

  selectEmployee(e: any) {
    console.log(e);
    e.component.byKey(e.currentSelectedRowKeys[0]).done((employee: Employee) => {
      if(employee) {
        this.selectedEmployee = employee;
      }
    });
  }

  exportGrid(e: any) {
    const workbook = new Excel.Workbook(); 
    const worksheet = workbook.addWorksheet("Main sheet"); 
    exportDataGrid({ 
        worksheet: worksheet, 
        component: e.component
    }).then(function() {
        workbook.xlsx.writeBuffer().then(function(buffer: BlobPart) { 
            saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx"); 
        }); 
    }); 
    e.cancel = true; 
  }

}
