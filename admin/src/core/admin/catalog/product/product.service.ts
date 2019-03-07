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
import {Api} from "../../providers/api/api";
// model
import {ProductListModel} from "./product-model/Product-list.model";
import {ProductDeleteModel} from "./product-model/product-delete.model";
import {DetailModel} from "./product-model/detail.model";


@Injectable()
export class ProductService extends Api {
        // for get method
    public params: any = {};
    // url
    private basUrl = this.getBaseUrl();


    /**
     * Handles 'productList' function. Calls get method with specific api address
     * along its param.
     *
     * @param params from ProductListModel
     */
    public productList(params: ProductListModel): Observable<any> {
        console.log('api calling');
        const reqOpts: any = {};
        // reqOpts.responseType = 'arraybuffer';
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.basUrl + '/product/productlist', reqOpts);

    }
    /**
     * Handles 'productCount' function. Calls get method with specific api address
     * along its param.
     *
     * @param params from ProductListModel
     */
    public productCount(params: ProductListModel): Observable<any> {
        console.log('api calling');
        const reqOpts: any = {};
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.basUrl + '/product/productlist', reqOpts);

    }

    /**
     * Handles 'productDelete' function. Calls delete method with specific api address
     * along its param.
     *
     * @param params from ProductDeleteModel
     */
    productDelete(params: ProductDeleteModel): Observable<any> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: {productId: params.productId}
        };

        return this.http.delete(this.basUrl + '/product/delete-product/' + params.productId, httpOptions);

    }
    /**
     * Handles 'productAdd' function. Calls post method with specific api address
     * along its param.
     *
     * @param param from Model
     */
    productAdd(param) {

        console.log('api method', param);

        return this.http.post(this.basUrl + '/product/add-product', param);

    }

    /**
     * Handles 'productDetail' function. Calls post method with specific api address
     * along its param.
     *
     * @param param from Model
     */
    productUpdate(param) {

        return this.http.post(this.basUrl + '/product/update-product/' + param.productId, param);

    }
    /**
     * Handles 'productDetail' function. Calls get method with specific api address
     * along its param.
     *
     * @param param from DetailModel
     */
    productDetail(param: DetailModel) {

        console.log('detail', param);
        return this.http.get(this.basUrl + '/product/product-detail/' + param.Id);
    }

    /**
     * Handles 'productIsfeature' function. Calls put method with specific api address
     * along its param.
     *
     * @param params from model
     */

    productIsfeature(params): Observable<any> {
        console.log('params', params);
        return this.http.put(this.basUrl + '/product-store/update-featureproduct/' + params.productId, params);

    }

}
