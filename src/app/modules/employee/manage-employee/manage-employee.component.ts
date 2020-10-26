import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { IEmployee } from '../../shared/models/app.model';
import { ModifyDetailsComponent } from '../modify-details/modify-details.component';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.scss']
})
export class ManageEmployeeComponent implements OnInit {
  displayedColumns: string[] = ['sno', 'firstName', 'lastName', 'address', 'dob', 'mobile', 'city', 'actions'];
  dataSource: MatTableDataSource<IEmployee> = new MatTableDataSource(EMPLOYEE_DATA);

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

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
    this.dialog.open(ModifyDetailsComponent, {
      data: employee
    });
  }

  deleteEmployee(employee: IEmployee): void {
    console.log(employee);
  }

  searchEmployee(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
  }

}

const EMPLOYEE_DATA: IEmployee[] = [
  { employeeId: 2, firstName: 'Venky', lastName: 'Kalisetty', address: '', dob: '10-11-1996', mobile: '8500125473', city: 'HYD' }
];
