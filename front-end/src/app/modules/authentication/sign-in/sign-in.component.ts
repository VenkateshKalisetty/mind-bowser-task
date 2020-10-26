import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from '../../shared/toastr/toastr.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required, Validators.minLength(8),
      Validators.pattern(
        '^(?=.*\\d)(?=.*\\W)(?=.*[a-zA-Z])(?=.*[a-zA-Z]).{8,}$'
      ),
    ]),
  });

  constructor(
    public router: Router,
    private authService: AuthenticationService,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.valid) {
      this.authService.signin(this.form.value).subscribe(
        (res) => {
          this.authService.setLocalStorage(res);
          this.router.navigate(['home']);
        },
        (err) => {
          console.log(err);
          this.toastrService.error(err.error.msg);
        }
      );
    }
  }
}