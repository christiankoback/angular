import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SignupModalComponent>) { }

  ngOnInit() {
  }
  
  onCancelClick(): void {
    this.dialogRef.close('cancelSignup');
  }
  
  onSigninClick(): void {
    this.dialogRef.close('completedSignup');
  }


}
