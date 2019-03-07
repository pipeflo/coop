/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, OnInit, ViewChild, HostListener} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ProductDialogComponent} from '../../shared/components/products-carousel/product-dialog/product-dialog.component';
import {ListsSandbox} from '../../../core/lists/lists.sandbox';
import {ConfigService} from '../../../core/service/config.service';


@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    @ViewChild('sidenav') sidenav: any;
    public sidenavOpen: boolean = true;
    public viewType: string = 'grid';
    public viewCol: number = 25;
    public sortings: Array<any>
    public sortData: any = 'Highest first';

    // parameters for product list
    public startKey: number = 0;
    public viewOrder: number = 0;
    public keyword: string = ''
    public categoryId: string = '';
    public brand: any = '';
    public priceFrom: string = '';
    public priceTo: string = '';
    // pagination
    public pagesize: any = 10;
    public index: any = 0;
    // load image path
    public imagePath: string;

    public isClicked: any = [];
    public queryParams: any;

    constructor(private activatedRoute: ActivatedRoute, public dialog: MatDialog, private router: Router, public listSandbox: ListsSandbox, private  configService: ConfigService) {
        // subscribe route params
        this.activatedRoute.params.subscribe(param => {
            this.queryParams = param;
            // if route params contains id assign id to the parameter categoryId
            if (this.queryParams.id) {
                console.log('queryparamName', this.queryParams.id);
                this.isClicked = [];
                this.isClicked[this.queryParams.id] = true;
                this.categoryId = this.queryParams.id;
            }
            // if route params contains keyword assign id to the parameter keyword
            if (this.queryParams.keyword) {
                console.log('queryparamName', this.queryParams.keyword);
                this.keyword = this.queryParams.keyword;
            }
            this.getProductList(this.startKey, this.viewOrder);
        });
    }

    ngOnInit() {
        this.sortings = [
            {order: 'Lowest first', value: 1},
            {order: 'Highest first', value: 0}
        ];
        this.imagePath = this.configService.get('resize').imageUrl;
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
    }
    /**
     * fetch product list from service. calling getProductList function from sandbox
     *
     * @param limit number of records to be load
     * @param offset startkey of the records to be load
     * @param manufacturerId brand id to be filtered
     * @param categoryId category id to be filtered
     * @param price price to be filtered
     * @param priceFrom filter from price
     * @param keyword filter to price
     */
    getProductList(offset, price) {
        let params: any = {};
        params.limit = this.pagesize;
        params.offset = offset;
        params.manufacturerId = this.brand;
        params.categoryId = this.categoryId;
        params.keyword = this.keyword;
        params.price = price;
        params.priceFrom = this.priceFrom;
        params.priceTo = this.priceTo;
        this.listSandbox.getProductList(params);
        params.count = true;
        this.listSandbox.getProductCount(params);
    }
    /**
     * open quick view of the product
     *
     * @param data passing selected product detail to dialog
     */
    public openProductDialog(product) {
        console.log('product', product);
        let dialogRef = this.dialog.open(ProductDialogComponent, {
            panelClass: 'product-dialog',
            data: product,
        });
        dialogRef.afterClosed().subscribe(products => {
            if (products) {
                this.router.navigate(['/products/productdetails', products.productId]);
            }
        });
    }
    // sidebar open close based on the window size
    @HostListener('window:resize')
    public onWindowResize(): void {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    }

    public changeViewType(viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
    }

    public changeSorting(sort) {
        this.sortData = sort.order;
        this.viewOrder = sort.value;
        this.getProductList(this.startKey, this.viewOrder);
    }

    onPageChange(event) {
        this.startKey = (event.pageSize * event.pageIndex);
        this.pagesize = event.pageSize;
        this.index = event.pageIndex;
        this.getProductList(this.startKey, this.viewOrder);
    }

    // receive data which is emitted from the child component through event emitter
    receiveProgress(event) {
        console.log('progress', event);
        this.categoryId = event.categoryId;
        this.brand = event.manufacturerId;
        this.priceFrom = event.priceFrom;
        this.priceTo = event.priceTo;
    }

}
