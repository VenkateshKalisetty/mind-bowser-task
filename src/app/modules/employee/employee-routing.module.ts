import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';

const routes: Routes = [
  {
    path: '',
    component: ManageEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
