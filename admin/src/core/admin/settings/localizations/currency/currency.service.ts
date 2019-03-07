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
import {HttpParams} from '@angular/common/http';
import {CurrencyListForm} from './currency-model/currencyList.model';
import {Api} from '../../../providers/api/api';

@Injectable()

export class CurrencyService extends Api {
    public editedCurrency: any;
    public currencyId: any;
    public pageoffset: number;
    private url: string = this.getBaseUrl();

    setEditedValue(editedCurrency: any) {
        this.editedCurrency = editedCurrency;
    }

    getEditedValue() {
        return this.editedCurrency;
    }


    deletePagerefresh(pageoffset: any) {
        this.pageoffset = pageoffset;
    }

    // currency list
    public currencyList(params: CurrencyListForm): Observable<any> {
        const reqOpts: any = {};
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/currency/currencylist', reqOpts);
    }

    // currency count
    public currencyListCount(params: any) {
        const reqOpts: any = {};
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/currency/currencylist', reqOpts);
    }

    // currency add
    public currencynew(value: any) {
        console.log('newvalue', value);
        return this.http.post(this.url + '/currency/add-currency', value);
    }

    // update currency
    public currencyupdate(value) {
        console.log('updateapivalue', value);
        let params: any = {};
        params.currencyId = value.currencyId;
        params.title = value.title;
        params.code = value.code;
        params.symbolLeft = value.symbolLeft;
        params.symbolRight = value.symbolRight;
        params.value = value.value;
        params.status = value.status;
        return this.http.put(this.url + '/currency/update-currency/' + value.currencyId, params);
    }


    public deleteCurrency(param: any, Id: number): Observable<any> {
        console.log('Id', Id);
        return this.http.delete(this.url + '/currency/delete-currency/' + Id, param);
    }
}
