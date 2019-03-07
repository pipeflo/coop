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
import {StockListForm} from './stock-model/stockstatuslist.model';
import {Api} from '../../../providers/api/api';

@Injectable()
export class StockService extends Api {
    public stockEditedvalue: any;
    private pageOffset: any;
    public stockStatusId: number;


    private url: string = this.getBaseUrl();

    setStockEditedValue(value: any) {
        this.stockEditedvalue = value;
    }

    getStockEditedValue() {
        return this.stockEditedvalue;
    }

    deletePagerefresh(value: any) {
        this.pageOffset = value;
    }


    //list api
    public stockList(params: StockListForm): Observable<any> {
        console.log('list value', params);
        const reqOpts: any = {};
        if (params) {
            delete params.count;
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/stock-status/stock-status-list', reqOpts);
    }

    //add api
    public newStock(value: any) {

        return this.http.post(this.url + '/stock-status/create-stock-status', value);
    }

    // list count api
    public stockListCount(params: StockListForm): Observable<any> {
        console.log('count value', params);
        const reqOpts: any = {};
        if (params) {
            delete params.offset;
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/stock-status/stock-status-list', reqOpts);
    }

    // update api
    stockUpdate(value) {
        console.log('value', value);
        let params: any = {};
        params.name = value.name;
        params.status = value.status;
        return this.http.put(this.url + '/stock-status/update-stock-status/' + value.stockStatusId, params);
    }

    public stockDelete(param: any, Id: number): Observable<any> {
        console.log('Id', Id);
        return this.http.delete(this.url + '/stock-status/delete-stock-status/' + Id, param);
    }
}
