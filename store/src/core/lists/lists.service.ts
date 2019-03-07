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
export class ListsService extends Api {

    private base: string;
    public getCountryList(params: any): Observable<any> {
        this.base = this.getBaseUrl();
        return this.http.get(this.base + 'list/country-list', {params: params});
    }
    /* get product list api*/

    public getProductList(params: any): Observable<any> {
        this.base = this.getBaseUrl();
        const reqOpts: any = {};
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.base + 'list/productlist', reqOpts);
    }
    /* get category list api*/

    public getCategoryList(params: any): Observable<any> {
        this.base = this.getBaseUrl();

        const reqOpts: any = {};
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.base + 'list/category-list', reqOpts);
    }
    /* get banner list api*/

    public getBannerList(params: any): Observable<any> {
        this.base = this.getBaseUrl();
        const reqOpts: any = {};
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.base + 'list/banner-list', reqOpts);
    }
    /* get featured product list api*/

    public getFeaturedListList(params: any): Observable<any> {
        this.base = this.getBaseUrl();
        const reqOpts: any = {};
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.base + 'product-store/featureproduct-list', reqOpts);
    }
    /* get related product list api*/

    public getRelatedProducts(params: any): Observable<any> {
        this.base = this.getBaseUrl();

        const reqOpts: any = {};
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.base + 'list/related-product-list', reqOpts);
    }
    /* get brand list api*/

    public getManufacturer(params: any): Observable<any> {
        this.base = this.getBaseUrl();

        const reqOpts: any = {};
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.base + 'manufacturers/manufacturerlist', reqOpts);
    }
    /* get  product detail api*/

    public getProductDetail(params: any): Observable<any> {
        this.base = this.getBaseUrl();
        return this.http.get(this.base + 'product-store/productdetail/' + params.id);
    }
    /* get  page list api*/

    public getPageList(params: any): Observable<any> {
        this.base = this.getBaseUrl();
        return this.http.get(this.base + 'pages/pagelist', {params: params});
    }
    /* get  settings api*/

    public getsettings(): Observable<any> {
        this.base = this.getBaseUrl();
        return this.http.get(this.base + 'settings/get-settings');
    }
    /* contact us detail api*/

    public contacUs(params): Observable<any> {
        this.base = this.getBaseUrl();
        return this.http.post(this.base + 'list/contact-us', params);
    }
    /* page detail api*/

    public pageDetails(orderId): Observable<any> {
        this.base = this.getBaseUrl();
        return this.http.get(this.base + 'pages/get_pagedetails/' + orderId);
    }


}
