import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }
  msgConfig: MatSnackBarConfig = {
    duration: 1000,
    horizontalPosition: 'right',
    verticalPosition:'top',
  }

  success(msg){
    this.msgConfig['panelClass'] = ['notification','success'];
    this.snackBar.open(msg,'', this.msgConfig);
  }
}
