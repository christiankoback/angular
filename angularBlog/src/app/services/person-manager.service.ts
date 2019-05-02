import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { latestBlogMessages } from './blogClasses';
import { BLOGMESSAGELIST } from './mock-blog';


@Injectable({
  providedIn: 'root'
})
export class PersonManagerService {

  constructor() { }
  
  getBlogMessages(): Observable<latestBlogMessages[]> {
	return of(BLOGMESSAGELIST);
  }	  
}
