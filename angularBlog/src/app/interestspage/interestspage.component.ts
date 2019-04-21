import { Component, OnInit } from '@angular/core';

import { IMAGESOFPROGRAMMINGPAST } from './mock-imageDB';

@Component({
  selector: 'app-interestspage',
  templateUrl: './interestspage.component.html',
  styleUrls: ['./interestspage.component.css']
})
export class InterestspageComponent implements OnInit {
	imageList = IMAGESOFPROGRAMMINGPAST;
  constructor() { }

  ngOnInit() {
  }

}
