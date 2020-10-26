import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { IEmployee } from '../../shared/models/app.model';
import { ToastrService } from '../../shared/toastr/toastr.service';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';
import { EmployeeService } from '../employee.service';
import { ModifyDetailsComponent } from '../modify-details/modify-details.component';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.scss'],
})
export class ManageEmployeeComponent implements OnInit {
  displayedColumns: string[] = [
    'sno',
    'firstName',
    'lastName',
    'address',
    'dob',
    'mobile',
    'city',
    'actions',
  ];
  employeeDataSource: MatTableDataSource<IEmployee> = new MatTableDataSource([]);

  constructor(
    private dialog: MatDialog,
    private employeeService: EmployeeService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getEmployeesData();
  }

  /**
   * Getting employees list under logged in manager
   */
  getEmployeesData(): void {
    this.employeeService.getEmployeesData().subscribe(
      (res) => {
        this.employeeDataSource = new MatTableDataSource(res);
      },
      (err) => {
        this.toastr.error(err.error.msg);
      }
    );
  }

  /**
   * Add or Update employee details
   * @param data Employee data
   */
  addOrUpdateEmployeeDetails(data: IEmployee): void {
    const employee: IEmployee = {
      employeeId: data ? data.employeeId : -1,
      firstName: data ? data.firstName : '',
      lastName: data ? data.lastName : '',
      address: data ? data.address : '',
      dob: data ? data.dob : '',
      mobile: data ? data.mobile : '',
      city: data ? data.city : '',
    };
    const dialogRef = this.dialog.open(ModifyDetailsComponent, {
      data: employee,
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res && res.success) {
        if (employee.employeeId === -1) {
          this.employeeDataSource.data.splice(0, 0, res.emp);
        } else {
          const index = this.employeeDataSource.data.findIndex(
            (v) => v.employeeId === employee.employeeId
          );
          this.employeeDataSource.data.splice(index, 1, res.emp);
        }
        this.employeeDataSource.data = this.employeeDataSource.data.slice();
      }
    });
  }

  /**
   * Deleting employee under logged in manager
   * @param employee Employee data
   */
  deleteEmployee(employee: IEmployee): void {
    this.dialog
      .open(DeleteConfirmComponent)
      .afterClosed()
      .subscribe(
        (res) => {
          if (res) {
            this.employeeService.deleteEmployee(employee.employeeId).subscribe(
              () => {
                const index = this.employeeDataSource.data.findIndex(
                  (v) => v.employeeId === employee.employeeId
                );
                this.employeeDataSource.data.splice(index, 1);
                this.employeeDataSource.data = this.employeeDataSource.data.slice();
              },
              (err) => {
                this.toastr.error(err.error.msg);
              }
            );
          }
        },
        (err) => {}
      );
  }

  /**
   * Search/Filter employees in table
   * @param value Search string
   */
  searchEmployee(value: string): void {
    this.employeeDataSource.filter = value.trim().toLowerCase();
  }
}
