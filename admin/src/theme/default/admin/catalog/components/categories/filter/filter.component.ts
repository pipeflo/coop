/*
 * SpurtCommerce
 * version 2.0.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import {Component, OnInit,EventEmitter,Output} from '@angular/core';
import {CategoriesSandbox} from "../../../../../../../core/admin/catalog/category/categories.sandbox";


@Component({
    selector: 'app-spurt-catalog-categories-filter',
    templateUrl: './filter.component.html',


})
export class CategoriesFilterComponent implements OnInit {

    // categorylist purpose
    private keyword: any;
    private sortOrder: any;
    @Output() progressEmit = new EventEmitter<string>();

    constructor(public categorySandbox: CategoriesSandbox) {
    }


    ngOnInit() {}

    /**
     * Handles filter  . Calls categorySandbox categorylist function .
     *
     * @param param with value which is already assigned
     */
    filter() {
        let param: any = {};
        param.limit = '5';
        param.offset = '';
        param.keyword = this.keyword;
        param.sortOrder = this.sortOrder;
        this.progressEmit.emit(param);
        this.categorySandbox.categorylist(param);
        param.limit = '';
        param.count = true;
        this.categorySandbox.categorycountdata(param);
    }
    // getting data from dropdown list from (Categories Name)
    onChange(event) {

        console.log('change', event.target.value);
        this.keyword = event.target.value;
    }

    // getting data from dropdown list from (sortOrder)
    onChanges(event) {
        console.log('changes', event.target.value);
        this.sortOrder = event.target.value;
    }

    // reset category list
    /**
     * Handles reset function  . Calls categorySandbox categorylist function .
     *
     * @param param with only one limit value .
     */

    reset() {
        let param: any = {};
        param.limit = 5;
        param.offset = '';
        param.keyword = '';
        this.progressEmit.emit(param);
        this.categorySandbox.categorylist(param);

    }


}
