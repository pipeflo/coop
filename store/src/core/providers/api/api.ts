/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of, throwError as observableThrowError} from 'rxjs';
import {ConfigService} from "../../service/config.service";

export const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class Api {

  constructor(
    public http: HttpClient, public configService: ConfigService
  ) {

  }

  protected getBaseUrl(): string {
    console.log('demo');
    return this.configService.get('api').storeUrl;
    // return 'http://fusionsodapi-stg.us-east-1.elasticbeanstalk.com';
  }

  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
