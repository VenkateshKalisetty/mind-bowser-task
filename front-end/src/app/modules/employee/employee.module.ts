import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeService } from './employee.service';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { ModifyDetailsComponent } from './modify-details/modify-details.component';

@NgModule({
  declarations: [
    ManageEmployeeComponent,
    ModifyDetailsComponent,
    DeleteConfirmComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ModifyDetailsComponent, DeleteConfirmComponent],
  providers: [MatNativeDateModule, DatePipe, EmployeeService],
})
export class EmployeeModule {}
