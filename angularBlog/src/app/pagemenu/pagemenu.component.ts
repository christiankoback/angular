import { Component, OnInit } from '@angular/core';
import { MENUITEMS } from '../mock-menu';

@Component({
  selector: 'Menu',
  templateUrl: './pagemenu.component.html',
  styleUrls: ['./pagemenu.component.css']
})

export class PagemenuComponent implements OnInit {
	menuList = MENUITEMS;
	
  constructor() { }

  ngOnInit() {
  }

}
