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
import {OrderstatusForm} from './orderstatus.models/orderstatus.model';
import {Api} from '../../../providers/api/api';


@Injectable()
export class OrderstatusApiClientService extends Api {

    public orderstatus: any;
    private url: string;

    orderstatusgetdata() {
        console.log(' get orderstatus', this.orderstatus);
        return this.orderstatus;
    }

    statusordersetdata(data) {
        this.orderstatus = data;
        console.log('set.orderstatus', this.orderstatus);

    }

    // order status list
    public getorderstatuslist(params: any): Observable<any> {
        this.url = this.getBaseUrl();
        const reqOpts: any = {};
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/order-status/order-status-list', reqOpts);

    }


    adddorderstatus(param) {
        this.url = this.getBaseUrl();

        return this.http.post(this.url + '/order-status/create-order-status', param);

    }

    // update order status
    public updateorderstatus(param: OrderstatusForm, Id: number): Observable<any> {
        console.log('Id', Id);
        this.url = this.getBaseUrl();

        return this.http.put(this.url + '/order-status/update-order-status/' + Id, param);
    }

    public deleteorderstatus(param: any, Id: number): Observable<any> {
        console.log('Id', Id);
        this.url = this.getBaseUrl();

        return this.http.delete(this.url + '/order-status/delete-order-status/' + Id, param);
    }
}
