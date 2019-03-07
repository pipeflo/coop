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
import {HttpParams} from '@angular/common/http';
import {CountryForm} from './country-model/country.model';
import {CountryListForm} from './country-model/countrylist.model';
import {Api} from '../../../providers/api/api';


@Injectable()
export class CountryService extends Api {

    public countrylistdata: any;

    private url: string = this.getBaseUrl();

    // setcountrylistdata
    setcountrylistdata(data) {
        this.countrylistdata = data;
    }

    getcountrylistdata() {
        return this.countrylistdata;
    }

    addCountry(param: CountryForm): Observable<any> {
        return this.http.post(this.url + '/country/add-country', param);
    }

    updateCountry(params) {
        console.log('api calling update', params);
        return this.http.put(this.url + '/country/update-country/' + params.countryId, params);

    }

    // country list

    public countrylist(params: CountryListForm): Observable<any> {
        const reqOpts: any = {};
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/country/countrylist', reqOpts);

    }

    // country pagination
    public countrypagiantion(params: CountryListForm): Observable<any> {
        const reqOpts: any = {};
        // reqOpts.responseType = 'arraybuffer';
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/country/countrylist', reqOpts);

    }

    // delete country
    public deletecountry(param: any, Id: number): Observable<any> {
        console.log('Id', Id);
        return this.http.delete(this.url + '/country/delete-country/' + Id, param);
    }
}
