import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DevExtremeComponentsModule } from '../shared/devextreme-components/devextreme-components.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    DevExtremeComponentsModule,
    SharedModule
  ]
})
export class AuthModule { }
