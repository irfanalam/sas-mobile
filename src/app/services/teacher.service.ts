import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class TeacherService {

  baseUrl: string;

  constructor(private _http: Http) {
    this.baseUrl = 'http://localhost:3000/api/';
  }

  authAdmin (body) {
    let url = this.baseUrl + '';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http
               .post(url, JSON.stringify(body), { headers: headers })
               .map(res => res.json());
  }

}
