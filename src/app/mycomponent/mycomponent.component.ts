import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss']
})
export class MycomponentComponent implements OnInit {
  value:string;
serveId= 10;
  constructor() { }

  ngOnInit(): void {
  }

get serverStatus(){
  return 'offline';
}
getValue(event:any): void {
// let sum = 22+event;
this.value=event.value;
console.log(parseInt(event.value));

}
}
