import { Component, HostBinding, OnInit } from '@angular/core';

import { AppInfoService } from '../shared/services/app-info.service';
import { ScreenService } from '../shared/services/screen.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }
  constructor(private screen: ScreenService, public appInfo: AppInfoService) { }

  ngOnInit(): void {
  }

}
