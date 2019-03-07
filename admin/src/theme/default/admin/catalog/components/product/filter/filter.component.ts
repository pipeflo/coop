/*
 * SpurtCommerce API
 * version 2.0.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {ProductSandbox} from "../../../../../../../core/admin/catalog/product/product.sandbox";


@Component({
    selector: 'app-catalog-product-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']


})
export class ProductFilterComponent implements OnInit {
    // reactive form
    public filterForm: FormGroup;
    public keyword: string;
    public sku: any;
    public status: number;
    // pagination
    @Input() pageSize: any;
    private price: number = 0;
    public pagenationCount: boolean;
    private selectedLink: string = 'Min';
    @Output() progressEmits = new EventEmitter<string>();

    constructor(public fb: FormBuilder, public sandbox: ProductSandbox) {
    }

    // initially calling the reactive form by setting  pagination count
    ngOnInit() {
        this.pagenationCount = true;
        this.initFilterForm();
    }

    // reactive form
    initFilterForm() {
        this.filterForm = this.fb.group({
            keyword: ['', Validators.required],
            sku: ['', Validators.required],
            status: ['', Validators.required],
        });
    }

    // selecting the price
    selectPrice(e: string): void {
        this.selectedLink = e;
    }

    /**
     * Handles  'resetFilter' event. Calls  getProductList and reset().
     *
     * @param filterForm entire form value
     */
    resetFilter() {
        this.filterForm.reset();
        let param: any = {};
        param.limit = 5;
        param.offset = '';
        param.keyword = '';
        this.progressEmits.emit(param);
        this.sandbox.getProductList(param);
    }

    /**
     * Handles  'applyFilter' event. Calls  getProductList.
     * if (selectedLink == 'Min') assign price value 1 ,
     * else assign price value 1
     */
    applyFilter() {
        this.keyword = this.filterForm.value.keyword;
        this.sku = this.filterForm.value.sku;
        this.status = this.filterForm.value.status;
        if (this.selectedLink == 'Min') {
            this.price = 1;
        }
        if (this.selectedLink == 'Max') {
            this.price = 2;
        }
        this.getProductList();
    }

    /**
     * Handles  'getProductList' event. Calls sandbox getProductList function ,
     * if (pagenationCount) then calls sandbox getProductCount.
     * @param params with pagination values
     * @param form entire form value
     */
    getProductList() {
        let params: any = {};
        params.offset = '';
        params.limit = '5';
        params.keyword = this.keyword;
        params.sku = this.sku;
        params.status = this.status;
        params.price = this.price;
        this.progressEmits.emit(params);
        this.sandbox.getProductList(params);
        params.limit = '';
        params.count = true;
        this.sandbox.getProductCount(params);

    }
}
