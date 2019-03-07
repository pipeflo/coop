/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, finalize, map} from 'rxjs/operators';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'DataType': 'application/json'
  })
};

@Injectable()
export class ConfigService {

  private config: Object;
  private env: Object;


  constructor(private http: HttpClient) {
  }

  /**
   * Loads the environment config file first. Reads the environment variable from the file
   * and based on that loads the appropriate configuration file - development or production
   */
  load() {
    console.log('loaded');
    return new Promise((resolve, reject) => {

      this.http.get('assets/config/env.json', httpOptions).subscribe((env_data: any) => {

        this.env = env_data;

        this.http.get('assets/config/' + env_data.env + '.json', httpOptions).subscribe((data: any) => {

          this.config = data;
          resolve(true);

        }, (err: any) => {
          return Observable.throw(err.json().error || 'Server error');
        });

      }, (err: any) => {
        console.log(err);
      });

    });
  }

  /**
   * Returns environment variable based on given key
   *
   * @param key
   */
  getEnv(key: any) {
    return this.env[key];
  }

  /**
   * Returns configuration value based on given key
   *
   * @param key
   */
  get(key: any) {
        return this.config[key];
  }
}
