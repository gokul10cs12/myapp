import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {
  childUser = {
    name: 'nash',
    uid: 12333
  }
  constructor() { }

  ngOnInit(): void {
  }

}
