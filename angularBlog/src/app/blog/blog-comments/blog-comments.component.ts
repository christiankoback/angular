import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'BlogComments',
  templateUrl: './blog-comments.component.html',
  styleUrls: ['./blog-comments.component.css']
})
export class BlogCommentsComponent implements OnInit {
	isUserLoggedIn: boolean;
  constructor() { 
		this.isUserLoggedIn = false;
	}

  ngOnInit() {
  }

}
