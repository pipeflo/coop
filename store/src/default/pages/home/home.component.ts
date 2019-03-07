/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, OnInit} from '@angular/core';
import {ListsSandbox} from '../../../core/lists/lists.sandbox';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


    constructor( public listSandbox: ListsSandbox) {
    }

    ngOnInit() {
        this.getBannerList();
        this.getBransList();
        this.getFeaturedList();
    }
    // fetch banner list from sandbox
    getBannerList() {
        let params: any = {};
        params.limit = 10;
        params.offset = 0;
        this.listSandbox.getBannerList(params);
    }
    // fetch brand list from sandbox

    getBransList() {
        let params: any = {};
        params.limit = 10;
        params.offset = 0;
        params.keyword = '';
        this.listSandbox.getManufacturerList(params);
    }
    // fetch featured product list from sandbox

    public getFeaturedList() {
        let params: any = {};
        params.limit = '';
        params.offset = 0;
        params.keyword = '';
        params.sku = '';
        this.listSandbox.getFeaturedList(params);
    }
}
