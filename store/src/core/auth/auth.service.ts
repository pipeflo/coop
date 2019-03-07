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
import {HttpParams} from '@angular/common/http';
import {Api} from '../providers/api/api';


@Injectable()
export class AuthApiService extends Api {

    private base: string = this.getBaseUrl();

    /* call login api*/
    public doLogin(params: any): Observable<any> {
        return this.http.post(this.base + 'customer/login', params);
    }
    /* call register api*/
    public doRegister(params: any): Observable<any> {
        return this.http.post(this.base + 'customer/register', params);
    }
    /* call recover account api*/
    public doRecover(params: any): Observable<any> {
        return this.http.post(this.base + 'customer/forgot-password', params);
    }

}
