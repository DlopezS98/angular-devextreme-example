import { NgModule } from '@angular/core';
import { DxFormModule } from 'devextreme-angular';
import { DxTreeViewModule } from "devextreme-angular/ui/tree-view";
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxDrawerModule } from 'devextreme-angular/ui/drawer';

@NgModule({
  declarations: [],
  exports: [
    DxScrollViewModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxButtonModule,
    DxToolbarModule,
    DxDrawerModule,
    DxTreeViewModule
  ]
})
export class DevexpressComponentsModule { }
