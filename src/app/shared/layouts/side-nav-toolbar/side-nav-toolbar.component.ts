import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-toolbar',
  templateUrl: './side-nav-toolbar.component.html',
  styleUrls: ['./side-nav-toolbar.component.scss']
})
export class SideNavToolbarComponent implements OnInit {

  menuOpened!: boolean;
  public title: string = "Angular + DevExtreme"
  constructor() { }

  ngOnInit(): void {
  }

}
