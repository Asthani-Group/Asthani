import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableHolderInfoComponent } from './table-holder-info/table-holder-info.component';

const routes: Routes = [
  {
    path: 'table-holder-info',
    component: TableHolderInfoComponent
  },
  {
    path: '',
    redirectTo: '/table-holder-info',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
