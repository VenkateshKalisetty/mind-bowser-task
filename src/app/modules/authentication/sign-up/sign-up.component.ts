import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '../../shared/toastr/toastr.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  maxDate: Date = new Date();

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dob: new FormControl(''),
    address: new FormControl(''),
    company: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(
        '^(?=.*\\d)(?=.*\\W)(?=.*[a-zA-Z])(?=.*[a-zA-Z]).{8,}$'
      ),
    ]),
  });

  constructor(
    public router: Router,
    private authService: AuthenticationService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.valid) {
      this.authService.signup(this.form.value).subscribe(
        (res) => {
          this.router.navigate(['signin']);
          this.toastrService.success(`Successfully registered`);
        },
        (err) => {
          console.log(err);
          this.toastrService.error(err.error.msg);
        }
      );
    }
  }

}
