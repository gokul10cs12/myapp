import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss']
})
export class MycomponentComponent implements OnInit {
  value:string;
serveId= 10;
// serverStatus = 'offline' ;
  constructor() { }

  ngOnInit(): void {
  }
  getValue(event:any){
    console.log("test",event);
  }
get serverStatus(){
  return 'offline';
}
}
