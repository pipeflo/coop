/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppApiClient {

  params: any = {};
  url = 'http://api.spurtcommerce.com/api';


  constructor(private http: HttpClient) {

  }

  // logout
  logoutapi() {
    console.log('logout api calling');
    return this.http.get(this.url + '/auth/logout');
  }
}
