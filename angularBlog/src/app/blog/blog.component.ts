import { Component, OnInit } from '@angular/core';
import { latestBlogMessages } from '../services/blogClasses';
import { BlogMessageManagerService } from '../services/blog-message-manager.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
	selectedBlog: string;
	blogMessages: latestBlogMessages[];
	isUserLoggedIn: boolean;
  constructor(private blogManager: BlogMessageManagerService) { }

  ngOnInit() {
	  this.getBlogMessages();
  }
  
  blogSelected(blogName: string){
	this.selectedBlog = blogName;
  }
	getBlogMessages():void{
		//this.blogMessages = this.blogManager.getBlogMessages();
		this.blogManager.getBlogMessages().subscribe(blogMessages => this.blogMessages = blogMessages);
	}
	
}
