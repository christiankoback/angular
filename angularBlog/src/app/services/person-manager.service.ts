import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BlogPerson } from './blogClasses';
import { MOCKPERSON } from './mock-person';


@Injectable({
  providedIn: 'root'
})
export class PersonManagerService {

  constructor() { }
  
  getPersonInfo(): Observable<BlogPerson> {
		return of(MOCKPERSON);
  }	  
}
