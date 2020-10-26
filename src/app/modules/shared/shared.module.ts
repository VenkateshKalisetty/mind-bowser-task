import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrSnackbarComponent } from './toastr/toastr-snackbar.component';
import { ToastrService } from './toastr/toastr.service';

@NgModule({
  declarations: [ToastrSnackbarComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
  ],
  entryComponents: [
    ToastrSnackbarComponent
  ],
  providers: [ToastrService]
})
export class SharedModule { }
