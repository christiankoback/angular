import { Component, OnInit} from '@angular/core';
import { MENUITEMS } from '../mock-menu';
import {MatDialog, MatDialogRef } from '@angular/material';


import { SignupModalComponent } from './signup-modal/signup-modal.component';
import { LoginModalComponent } from './login-modal/login-modal.component';

@Component({
  selector: 'Menu',
  templateUrl: './pagemenu.component.html',
  styleUrls: ['./pagemenu.component.css']
})

export class PagemenuComponent implements OnInit {
	menuList = MENUITEMS;
	selectedMenuItem: string;
	constructor(public dialog: MatDialog) {
		this.selectedMenuItem = "home";
	}



	openLoginDialog(): void {
		const loginDialogRef = this.dialog.open(LoginModalComponent, {
		width: '250px',
	});

	loginDialogRef.afterClosed().subscribe(result => {
		console.log('The login dialog was closed');
	});

	openSignupDialog(): void {
		const signupDialogRef = this.dialog.open(SignupModalComponent, {
		width: '250px',
	});

	signupDialogRef.afterClosed().subscribe(result => {
		console.log('The signin dialog was closed');
	});


	ngOnInit() {
	}
	
	ChangeTextFormat(menuItemName: string){
		this.selectedMenuItem = menuItemName;
	}

}
