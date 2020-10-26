import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEmployee } from '../../shared/models/app.model';
import { ToastrService } from '../../shared/toastr/toastr.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-modify-details',
  templateUrl: './modify-details.component.html',
  styleUrls: ['./modify-details.component.scss'],
})
export class ModifyDetailsComponent implements OnInit {
  maxDate: Date = new Date();

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dob: new FormControl(''),
    address: new FormControl(''),
    mobile: new FormControl('', [
      Validators.maxLength(10),
      Validators.minLength(10),
    ]),
    city: new FormControl(''),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IEmployee,
    private datePipe: DatePipe,
    private employeeService: EmployeeService,
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<ModifyDetailsComponent>
  ) {}

  ngOnInit(): void {
    this.form.patchValue({
      firstName: this.data.firstName,
      lastName: this.data.lastName,
      dob: this.data.dob ? new Date(this.data.dob) : '',
      address: this.data.address,
      mobile: this.data.mobile,
      city: this.data.city,
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const {
        firstName,
        lastName,
        dob,
        address,
        mobile,
        city,
      } = this.form.value;
      const employee: IEmployee = {
        employeeId: this.data.employeeId,
        firstName,
        lastName,
        dob: dob ? this.datePipe.transform(dob, 'yyyy/MM/dd') : '',
        address,
        mobile,
        city,
      };
      this.employeeService.addOrUpdateEmployee(employee).subscribe(
        (res) => {
          const message =
            this.data.employeeId === -1 ? `Employee added` : `Employee updated`;
          this.toastr.success(message);
          this.dialogRef.close({ emp: res, success: true });
        },
        (err) => {
          this.toastr.error(err.error.msg);
        }
      );
    } else {
      this.form.markAllAsTouched();
    }
  }
}
