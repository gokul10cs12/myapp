import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildOneComponent } from './child-one/child-one.component';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss']
})
export class MycomponentComponent implements OnInit, AfterViewInit {
  value: string;
  serveId = 10;
  constructor() { }
  @ViewChild(ChildOneComponent) childComponent;
  myName:string;

    /*
* ViewChild to pass the value from child to parent i.e one component to be injected to another
giving the parent to access its attributes and func. CAVIET : child won't be available until the child has been fully initialized
* means we need to implement the AfterViewInit life cycle hook to receive the data from the child
*
*/

  ngAfterViewInit(): void {
   this.myName = this.childComponent.myName;
   console.log("myName", this.myName);
  }

  ngOnInit(): void {
  }

  get serverStatus() {
    return 'offline';
  }
  getValue(event: any): void {
    // let sum = 22+event;
    this.value = event.value;
    console.log(parseInt(event.value));
  }

  getName(event:any){
    console.log("that",event);
  }


}

