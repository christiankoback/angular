import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, Validators, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent implements OnInit {
	email = new FormControl('', [Validators.required, Validators.email]);
	pwd = new FormControl('', [Validators.required,Validators.minLength(6)]);
	pwd2 = new FormControl('', [Validators.required,Validators.minLength(6)]);
	
  constructor(public dialogRef: MatDialogRef<SignupModalComponent>) { }
	getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
  }
	getPassErrorMessage() {
    return this.pwd.hasError('required') ? 'You must enter a value' : this.pwd.hasError('password') ? 'Not a valid password' : '';
  }
	getPass2ErrorMessage() {
		return this.pwd.hasError('required') ? 'You must enter a value' : this.pwd.hasError('password') ? 'Not a valid password' : '';
  }
  ngOnInit() {
  }
  
  onCancelClick(): void {
    this.dialogRef.close('cancelSignup');
  }
  
  onRegisterClick(): void {
    this.dialogRef.close('completedSignup');
  }


}
