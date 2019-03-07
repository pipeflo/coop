/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ListsSandbox} from '../../../../core/lists/lists.sandbox';
import {ConfigService} from '../../../../core/service/config.service';

@Component({
    selector: 'app-spurt-product-filter',
    templateUrl: './product-filter.component.html',
    styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
    public priceFrom = '';
    public priceTo = '';
    public conditions = [{option: 'New', value: 1}, {option: 'Used', value: 0}]
    brand: any = '';
    category: any = '';
    keyword: any = '';
    condition: any = '';
    @Input() isClicked: any = [];
    @Output() progressEmit = new EventEmitter<string>();

    public imagePath: string;
    constructor(private router: Router, public listSandbox: ListsSandbox, private configService: ConfigService) {
    }

    ngOnInit() {
        this.imagePath = this.configService.get('resize').imageUrl;
        this.getCategories();
        this.getBrands();
    }
    public onChangeCategory(categoryId) {
        this.category = categoryId;
            this.getProducts();
    }
    public getBrands(){
        let params: any = {};
        params.limit = '';
        params.offset = 0;
        params.keyword = '';
        this.listSandbox.getManufacturerList(params);
    }
    public selectBrand(brandId) {
        this.brand = brandId;
        this.getProducts();
    }

    public getCategories() {
        let params: any = {};
        params.limit = '';
        params.offset = 0;
        params.keyword = '';
        params.sortOrder = '';
        this.listSandbox.getCategoryList(params);
    }
    getProducts() {
        let params: any = {};
        params.limit = 10;
        params.offset = 0;
        params.manufacturerId = this.brand;
        params.keyword = this.keyword;
        params.categoryId = this.category;
        params.priceFrom = this.priceFrom;
        params.priceTo = this.priceTo;
        params.condition = this.condition;
        this.progressEmit.emit(params);
        this.listSandbox.getProductList(params);
        params.count = true;
        this.listSandbox.getProductCount(params);
    }
    changeCondition(event, id) {
        console.log('event', event)
        this.condition = id;
            this.getProducts();
    }
    selectPrice() {
        this.getProducts();
    }
}