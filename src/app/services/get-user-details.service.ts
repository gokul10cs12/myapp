import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from '../models/user-details-template';

@Injectable({
  providedIn: 'root'
})
export class GetUserDetailsService {

  // tslint:disable-next-line: variable-name
  private _url = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: typeef
  getDetails(): Observable<UserDetails[]> {
     let responseApi =  this.http.get<UserDetails[]>(this._url);
     console.log(responseApi);
    return responseApi;
  }

}
