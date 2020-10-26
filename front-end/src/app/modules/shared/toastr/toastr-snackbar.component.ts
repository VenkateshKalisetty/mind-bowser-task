import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toastr-snackbar',
  template: `
    <div style="display: flex;">
      <mat-icon style="font-weight: 500;">{{ data.type }}</mat-icon>
      <span class="message">{{ data.message }}</span>
      <mat-icon class="close" aria-label="Close" (click)="dismiss()">close</mat-icon>
    </div>
  `,
  styles: [
    `
      .message {
        width: 100%;
        margin: 0 1em 0 0.6em;
        line-height: 24px;
      }
      .close {
        padding: 0 3px;
        font-size: 18px;
        line-height: 24px;
      }
      .close:hover {
        background-color: #d4b8b652;
        border-radius: 50%;
        cursor: pointer;
        padding: 0 3px;
      }
    `,
  ],
})
export class ToastrSnackbarComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: IToastrMessage,
    public snackBarRef: MatSnackBarRef<ToastrSnackbarComponent>
  ) {}
  dismiss(): void {
    this.snackBarRef.dismiss();
  }
}

export interface IToastrMessage {
  message: string;
  type: string;
  class: string;
}
