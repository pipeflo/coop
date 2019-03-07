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
export class WishlistService extends Api {

    private base: string = this.getBaseUrl();
    public userTokenDetail = localStorage.getItem('userToken');

    /* get wish list api*/
    public getWishlist(params: any): Observable<any> {
        return this.http.get(this.base + 'customer/wishlist-product-list');
    }

    /* delete product from wish list api*/
    public deleteProduct(params: any): Observable<any> {
        console.log('params', params);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: {wishlistProductId: params.wishlistProductId}
        };
        return this.http.delete(this.base + 'customer/wishlist-product-delete/' + params.wishlistProductId, httpOptions);
    }

}
