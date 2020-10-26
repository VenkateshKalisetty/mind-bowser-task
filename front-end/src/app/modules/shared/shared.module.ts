import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToastrSnackbarComponent } from './toastr/toastr-snackbar.component';
import { ToastrService } from './toastr/toastr.service';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [ToastrSnackbarComponent, HeaderComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  entryComponents: [ToastrSnackbarComponent],
  providers: [ToastrService],
  exports: [HeaderComponent],
})
export class SharedModule {}
