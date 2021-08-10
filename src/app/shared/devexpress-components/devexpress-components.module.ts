import { NgModule } from '@angular/core';
import { DxFormModule } from 'devextreme-angular';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';

@NgModule({
  declarations: [],
  exports: [
    DxScrollViewModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxButtonModule,
    DxToolbarModule
  ]
})
export class DevexpressComponentsModule { }
