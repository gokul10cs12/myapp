import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {
  private user = new BehaviorSubject<string>('gokul');
  cast = this.user.asObservable();

  constructor() { }

  passValue(newValue){
    this.user.next(newValue);
  }
}
