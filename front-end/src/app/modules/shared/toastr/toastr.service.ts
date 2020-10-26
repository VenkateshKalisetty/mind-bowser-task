import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  IToastrMessage,
  ToastrSnackbarComponent,
} from './toastr-snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  constructor(public snackbar: MatSnackBar) {}

  /**
   * Success toastr message
   * @param message Toastr message
   */
  success(message: string): void {
    const alert: IToastrMessage = {
      type: 'done',
      class: 'success-snackbar-container',
      message,
    };
    this.openSnackbar(alert);
  }

  /**
   * Error toastr message
   * @param message Toastr message
   */
  error(message: string): void {
    const alert: IToastrMessage = {
      type: 'error',
      class: 'error-snackbar-container',
      message,
    };
    this.openSnackbar(alert);
  }

  /**
   * Warning toastr message
   * @param message Toastr message
   */
  warning(message: string): void {
    const alert: IToastrMessage = {
      type: 'warning',
      class: 'warning-snackbar-container',
      message,
    };
    this.openSnackbar(alert);
  }

  /**
   * Info toastr message
   * @param message Toastr message
   */
  info(message: string): void {
    const alert: IToastrMessage = {
      type: 'info',
      class: 'info-snackbar-container',
      message,
    };
    this.openSnackbar(alert);
  }

  // Showing snackbar with alert message and type
  private openSnackbar(alert: IToastrMessage): void {
    this.snackbar.openFromComponent(ToastrSnackbarComponent, {
      data: alert,
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: [alert.class],
    });
  }
}
