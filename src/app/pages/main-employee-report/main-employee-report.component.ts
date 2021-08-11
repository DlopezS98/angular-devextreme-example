import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Tabs } from 'src/app/shared/models/components/TabPanelData';

@Component({
  selector: 'app-main-employee-report',
  templateUrl: './main-employee-report.component.html',
  styleUrls: ['./main-employee-report.component.scss']
})
export class MainEmployeeReportComponent implements OnInit, AfterViewInit {

  public tabs: Tabs[] = [];
  constructor() {
    // this.tabs = this.getInitialTabs();
  }

  ngOnInit(): void {
    this.tabs = this.getInitialTabs();
  }

  ngAfterViewInit(): void {
  }

  private getInitialTabs(): Tabs[]{
    let tabs: Tabs[] = [
      {title: 'Employees-V1', icon: 'tableproperties', contentSelector: 'app-employees-report', badge: ''},
      {title: 'Employees-V2', icon: 'rowfield', contentSelector: 'app-employees-report-v2', badge: ''},
    ];
    return tabs;
  }

}
