import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [SignUpComponent, SignInComponent],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
