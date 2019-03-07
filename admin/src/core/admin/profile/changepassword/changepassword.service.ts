/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import {ChangePasswordForm} from "./changepassword-models/changepassword.model";


@Injectable()
export class ChangePasswordService {

    params: any = {};
    url = 'http://api.spurtcommerce.com/api';

    constructor(private http: HttpClient) {

    }

    // change psw
    public changePassword(param: ChangePasswordForm): Observable<any> {
        console.log('cangePassword');
        return this.http.put(this.url + '/auth/change-password', param);
    }

}
