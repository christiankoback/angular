import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import {FormControl, Validators, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
	email = new FormControl('', [Validators.required, Validators.email]);
	password = new FormControl('', [Validators.required,Validators.minLength(6)]);
  constructor( private dialogRef: MatDialogRef<LoginModalComponent>) {}

	getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
  }
	getPassErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' : this.password.hasError('password') ? 'Not a valid password' : '';
  }
  ngOnInit() {
  }
  
  onCancelClick(): void {
    this.dialogRef.close('cancelLogin');
  }
  
  onLoginClick(): void {
    this.dialogRef.close();
  }

}
