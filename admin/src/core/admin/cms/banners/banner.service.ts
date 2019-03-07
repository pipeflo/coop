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
import {HttpParams} from "@angular/common/http";
import {BannerlistModel} from "./banner-model/bannerlist.model";
import {BannercountModel} from "./banner-model/bannercount.model";
import {BannerupdateModel} from "./banner-model/bannerupdate.model";
import {BanneraddModel} from "./banner-model/banneradd.model";
import {Api} from "../../providers/api/api";


@Injectable()
export class BannerService extends Api {

    params: any = {};
    private url: string = this.getBaseUrl();
    bannerEditdata: any;


    // banner edit service
    setBannerListData(data) {
        this.bannerEditdata = data;
    }

    getbannerListdata() {
        return this.bannerEditdata;
    }

    // list
    public bannerList(params: BannerlistModel): Observable<any> {
        const reqOpts: any = {};
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/banner/bannerList', reqOpts);

    }

    //  Pagination
    public bannerPagiantion(params: BannercountModel): Observable<any> {
        const reqOpts: any = {};
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/banner/bannerlist', reqOpts);

    }

// Update
   public updateBanner(param: BannerupdateModel, Id: number): Observable<any> {
        return this.http.put(this.url + '/banner/update-banner/' + Id, param);
    }
// add
    addBanner(param: BanneraddModel) {
        return this.http.post(this.url + '/banner/add-banner', param);


    }

// delete
    public deleteBanner(param: any, Id: number): Observable<any> {
        return this.http.delete(this.url + '/banner/delete-banner/' + Id, param);
    }
}
