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
import {HttpHeaders, HttpParams} from '@angular/common/http';

import {Api} from '../providers/api/api';


@Injectable()
export class ProductControlService extends Api {

    private base: string;
    /* add item to wish list api*/

    public addToWishlist(params: any): Observable<any> {
        this.base = this.getBaseUrl();
        return this.http.post(this.base + 'customer/add-product-to-wishlist', params);
    }
    /* call checkout api*/

    public CheckoutProduct(params: any): Observable<any> {
        this.base = this.getBaseUrl();
        return this.http.post(this.base + 'orders/customer-checkout', params);
    }

}
