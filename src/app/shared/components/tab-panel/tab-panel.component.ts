import { Component, Input, OnInit } from '@angular/core';
import { Tabs } from '../../models/components/TabPanelData';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent implements OnInit {

  @Input() tabs: Tabs[] = []

  constructor() { }

  ngOnInit(): void {
    console.log("tabcomponent", this.tabs)
  }

}
