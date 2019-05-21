import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import {FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
//import { AuthService } from './../auth/auth.service';
import {MatInputModule,MatOptionModule, MatSelectModule, MatIconModule} from '@angular/material';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
	loginForm: FormGroup;                    
  //private formSubmitAttempt: boolean;
	
	/*
	email = new FormControl('', [Validators.required, Validators.email]);
	password = new FormControl('', [Validators.required,Validators.minLength(6)]);
	
	*/
	
	
  constructor(fb: FormBuilder, private dialogRef: MatDialogRef<LoginModalComponent>) {
		this.loginForm = fb.group({
			email:['', [Validators.required, Validators.email] ],
			password:['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]]
		});
	//private authService: AuthService
	}





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
	/*
  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
	*/
  onLoginClick(): void {
    this.dialogRef.close();
  }
	/*
	loginUser(){
		console.log("form was submitted");
		if (this.form.valid) {
      this.authService.login(this.form.value); // {7}
    }
    this.formSubmitAttempt = true;
	}
	*/
}
