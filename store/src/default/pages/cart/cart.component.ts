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
import {ProductControlSandbox} from '../../../core/product-control/product-control.sandbox';
import {ConfigService} from '../../../core/service/config.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    public imagePath: string;
    constructor( public productControl: ProductControlSandbox, private configService: ConfigService) {
    }

    ngOnInit() {
        this.imagePath = this.configService.get('resize').imageUrl;
    }
    // increase or decrease product count
    changeCount(product, operation) {
        console.log('product', product);
        this.productControl.ChangeCount(product, operation);
    }
    // remove product from cart
    removeProduct(product) {
        this.productControl.removeItemFromCart(product);
    }
    // clear cart
    public clear() {
        this.productControl.clearCart();
    }

}
