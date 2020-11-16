import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit, OnChanges {
  childUser = {
    name: 'nash',
    uid: 12333
  }
  myName:string ="string";
  @Input() input: string;
  @Output() name = new EventEmitter<string>();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("child component:", this.input);
  }

  ngOnInit(): void {
    // console.log("child component:", this.input);
  }
  getValue(event: any) {
    console.log("child button value:", event.value);
    this.name.emit(event.value);

    this.myName = event.value;
  }



}
