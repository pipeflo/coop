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
import {Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';
import {UserForm} from './user-model/user.model';
import {UserlistForm} from './user-model/userlist.model';
import {Api} from '../../providers/api/api';


@Injectable()
export class UserService extends Api {
    public userdata: any;

    public params: any = {};
    private url = this.getBaseUrl();

    // SET & GET SERVICE
    getdata() {
        return this.userdata;
    }

    setdata(data) {
        console.log('data', data);
        this.userdata = data;
    }

    // new user
    addUser(param: UserForm): Observable<any> {
        return this.http.post(this.url + '/auth/create-user', param);

    }

    public updateUser(param: UserForm, Id: number): Observable<any> {
        console.log('Id', Id);
        return this.http.put(this.url + '/auth/update-user/' + Id, param);
    }

    // user group list
    userGrouplist(params: any): Observable<any> {
        const reqOpts: any = {};
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/role/rolelist', reqOpts);

    }

    // user list
    userlist(params: any): Observable<any> {
        const reqOpts: any = {};
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/auth/userlist', reqOpts);

    }

    public userpagiantion(params: UserlistForm): Observable<any> {
        const reqOpts: any = {};
        // reqOpts.responseType = 'arraybuffer';
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/auth/userlist', reqOpts);

    }

}
