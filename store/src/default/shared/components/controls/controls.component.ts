/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ProductControlSandbox} from '../../../../core/product-control/product-control.sandbox';
import { Router } from '@angular/router';


@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
    @Input() product: any;
    @Input() type: string;
    @Output() onOpenProductDialog: EventEmitter<any> = new EventEmitter();
    @Output() onQuantityChange: EventEmitter<any> = new EventEmitter<any>();
    public count: number = 1;
    public align = 'center center';
    public quantity: any = 1;
    public isWish: any = {};
    constructor( 
        public snackBar: MatSnackBar, 
        public controlSandbox: ProductControlSandbox,
        private router: Router
        ) {
    }

    ngOnInit() {
        if (this.product) {
            if (this.product.cartCount > 0) {
                this.count = this.product.cartCount;
            }
        }
        this.layoutAlign();
    }
    // align layout based on condition type
    public layoutAlign() {
        if (this.type == 'all') {
            this.align = 'space-between center';
        }
        else if (this.type == 'wish') {
            this.align = 'start center';
        }
        else if (this.type == 'detail') {
            this.align = 'start center';
        }

        else {
            this.align = 'center center';
        }
    }
    // change quantity of the product
    public changeCount(operation) {
        if (operation === 'remove') {
            this.quantity -= 1;
        } else if (operation === 'add') {
            this.quantity += 1;
        }
    }
    // add product to wishlist
    public addToWishList(product) {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser) {
            const params: any = {};
            params.productId = product.productId;
            this.controlSandbox.addToWishlist(params);
        } else {
            this.router.navigate(['/sign-in']);
        }
    }
    // add product to cart

    public addToCart(product) {
        product.productCount = this.quantity;
        this.controlSandbox.addItemsToCart(product);
    }

    public openProductDialog(event) {
        this.onOpenProductDialog.emit(event);
    }
   // emit quantity while changing
    public changeQuantity(value) {
        this.onQuantityChange.emit(value);
    }

}