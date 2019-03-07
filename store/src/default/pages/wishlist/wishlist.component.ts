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
import {MatSnackBar} from '@angular/material';
import {ProductControlSandbox} from '../../../core/product-control/product-control.sandbox';
import {WishlistSandbox} from '../../../core/wishlist/wishlist.sandbox';
import {ConfigService} from '../../../core/service/config.service';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss'],
    providers: [ProductControlSandbox]
})
export class WishlistComponent implements OnInit {
    public quantity: number = 1;
    public imagePath: string;

    constructor(public snackBar: MatSnackBar, public wishlistSandbox: WishlistSandbox,
                public productControl: ProductControlSandbox,
                private  configService: ConfigService) {
    }

    ngOnInit() {
        this.imagePath = this.configService.get('resize').imageUrl;
        let params: any = {};
        params.limit = 10;
        params.offset = '';
        this.wishlistSandbox.getWishlist(params);
    }
    // remove product from wishlist
    public remove(productId) {
        let params: any = {};
        params.wishlistProductId = productId;
        this.wishlistSandbox.deleteWishlist(params);
    }
    // remove product from wishlist to cart
    public addToCart(products) {
        console.log('product', products);
        let tempProduct = products.product;
        tempProduct.productImage = products.productImage;
        this.productControl.addItemsToCart(products.product);

    }
}