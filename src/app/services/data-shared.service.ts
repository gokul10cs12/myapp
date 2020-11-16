import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {
  private user = new BehaviorSubject<string>('john');
  cast = this.user.asObservable();

  constructor() { }

  passValue(newValue){
    this.user.next(newValue);
  }
}
