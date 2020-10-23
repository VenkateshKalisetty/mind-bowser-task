import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { ModifyDetailsComponent } from './modify-details/modify-details.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';



@NgModule({
  declarations: [ManageEmployeeComponent, ModifyDetailsComponent, DeleteConfirmComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
