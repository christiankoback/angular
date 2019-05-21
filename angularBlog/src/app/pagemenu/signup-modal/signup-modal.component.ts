import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import {MatInputModule,MatOptionModule, MatSelectModule, MatIconModule} from '@angular/material';
//import {ErrorStateMatcher} from '@angular/material';
//import { AuthService } from './../auth/auth.service';


@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
/*
class CrossFieldErrorMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null):boolean{
		return control.dirty && form.invalid;
	}
}

export const passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  return formGroup.get('password').value === formGroup.get('password2').value ?
    null : { 'passwordMismatch': true };
}
*/
export class SignupModalComponent implements OnInit {
	
	registerForm: FormGroup;
	//private formSubmitAttempt: boolean;
	
	//errorMatcher = new CrossFieldErrorMatcher();
	
	/*
	email = new FormControl('', [Validators.required, Validators.email]);
	pwd = new FormControl('', [Validators.required,Validators.minLength(6)]);
	pwd2 = new FormControl('', [Validators.required,Validators.minLength(6)]);
	*/
  constructor(fb: FormBuilder, public dialogRef: MatDialogRef<SignupModalComponent>) {
		this.registerForm = fb.group({
			email:['', [Validators.required, Validators.email] ],
			password:['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
			password2:['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
		});
		//private authService: AuthService
		/*
		this.registerForm = fb.group({
			email:['', [Validators.required, Validators.email] ],
			password:['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
			password2:['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
		},{
			validator: this.passwordValidator
		});
		*/
	}
	
	getErrorMessage() {
    //return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
		//let stringtest: string = this.registerForm.value == "chris@fun.ca" ? 'it matches' : 'email is:' + this.registerForm.value;
		
		//return stringtest;
  }
	getPassErrorMessage() {
    //return this.pwd.hasError('required') ? 'You must enter a value' : this.pwd.hasError('password') ? 'Not a valid password' : '';
  }
	getPass2ErrorMessage() {
		//return this.pwd.hasError('required') ? 'You must enter a value' : this.pwd.hasError('password') ? 'Not a valid password' : '';
  }
	
  ngOnInit() {
  }
  
  onCancelClick(): void {
    this.dialogRef.close('cancelSignup');
  }
  
  onRegisterClick(): void {
		this.dialogRef.close('completedSignup');
		/*
		if(this.registerForm.valid){
      alert('User form is valid!!')
			
    } else {
      alert('User form is not valid!!')
    }
		*/
  }
	
	/*
	passwordValidator(form: FormGroup) {
    const condition = form.get('password').value !== form.get('password2').value;

    return condition ? { passwordsDoNotMatch: true} : null;
  }
	*/
}
