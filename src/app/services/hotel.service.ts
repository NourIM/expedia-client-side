import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HotelService  {
  constructor(private http: Http) {}

  public findHotales(params = {}) {
    console.log('params', params);
    return this.http.post('http://expedia-dev.herokuapp.com/search', params)
      .map((response: Response) => {
        return response.json();
      });
  }
}