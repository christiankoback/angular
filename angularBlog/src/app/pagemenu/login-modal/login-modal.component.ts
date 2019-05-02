import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginModalComponent>) { }

  ngOnInit() {
  }
  
  onCancelClick(): void {
    this.dialogRef.close('cancelLogin');
  }
  
  onLoginClick(): void {
    this.dialogRef.close('completedLogin');
  }

}
