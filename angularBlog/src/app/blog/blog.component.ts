import { Component, OnInit } from '@angular/core';
import { BLOGMESSAGELIST } from './mock-blog';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
	selectedBlog: string;
	blogMessages = BLOGMESSAGELIST;
  constructor() { }

  ngOnInit() {
  }
  
  blogSelected(blogName: string){
	this.selectedBlog = blogName;
  }

}
