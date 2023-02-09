import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { TableHolderInfoComponent } from './table-holder-info/table-holder-info.component';


@NgModule({
  declarations: [
    TableHolderInfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
