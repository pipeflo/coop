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
import {Observable , Subject} from 'rxjs';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { EditprofileForm} from "./models/editprofile.model";


@Injectable()
export class EditprofileService {

    params:any = {};
    url = 'http://api.spurtcommerce.com/api';

    constructor(private http:HttpClient) {

    }

    // change psw
    public editProfile(param:EditprofileForm):Observable<any> {
        return this.http.post(this.url + '/auth/edit-profile', param);
    }

}
