import { Component, OnInit} from '@angular/core';
import { MENUITEMS } from '../mock-menu';
import {MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

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
	
	/*
	
	*/
	
	constructor(private dialog: MatDialog) {
		this.selectedMenuItem = "home";
	}
	ngOnInit() {
	}
	isDialogOpen: boolean = false;
	
	openLoginDialog(): void {
		if (!this.isDialogOpen){
			this.isDialogOpen = true;
			const dialogConfig = new MatDialogConfig();
			dialogConfig.autoFocus = true;
			dialogConfig.disableClose = true;
			dialogConfig.width = '300px';
			dialogConfig.hasBackdrop = true;
			dialogConfig.position = { left: '40%' };
			const logindialogRef = this.dialog.open(LoginModalComponent, dialogConfig);

			logindialogRef.afterClosed().subscribe(result => {
				console.log('The dialog was closed');
				this.isDialogOpen = false;
			});
		}
  }
	
	
	openSignupDialog(): void {
		if (!this.isDialogOpen){
			this.isDialogOpen = true;
			const dialogConfig = new MatDialogConfig();
			dialogConfig.autoFocus = true;
			dialogConfig.disableClose = true;
			dialogConfig.width = '300px';
			dialogConfig.hasBackdrop = true;
			dialogConfig.position = { left: '40%' };
			const signindialogRef = this.dialog.open(SignupModalComponent, dialogConfig);

			signindialogRef.afterClosed().subscribe(result => {
				console.log('The dialog was closed');
				this.isDialogOpen = false;
			});
		}
  }

	ChangeTextFormat(menuItemName: string){
		this.selectedMenuItem = menuItemName;
	}

}
