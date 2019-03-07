/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar, MatStepper} from '@angular/material';
import {emailValidator} from '../../theme/utils/app-validators';
import {ProductControlSandbox} from '../../../core/product-control/product-control.sandbox';
import {ListsSandbox} from '../../../core/lists/lists.sandbox';
import {ConfigService} from '../../../core/service/config.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
    @ViewChild('horizontalStepper') horizontalStepper: MatStepper;
    @ViewChild('verticalStepper') verticalStepper: MatStepper;
    public checkoutForm: FormGroup;
    public submitted: boolean = false;
    public imagePath: any;
    constructor(public formBuilder: FormBuilder, public snackBar: MatSnackBar,
                public productControlSandbox: ProductControlSandbox,
                public listsSandbox: ListsSandbox, public configService: ConfigService) {
    }

    ngOnInit() {
        this.initCheckoutForm();
        this.imagePath = this.configService.get('resize').imageUrl;
    }
    // create form group for checkout
    initCheckoutForm() {
        this.checkoutForm = this.formBuilder.group({
            'firstName': ['', Validators.required],
            'lastName': ['', Validators.required],
            'middleName': '',
            'company': '',
            'email': ['', Validators.compose([Validators.required, emailValidator])],
            'phone': ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]{10}$/)])],
            'country': ['', Validators.required],
            'city': ['', Validators.required],
            'state': '',
            'zip': ['', Validators.required],
            'address': ['', Validators.required],
            'addressLine': ''
        });
    }
    /**
     * place order with product detail, if the form is valid
     *
     * @param productDetails detail of the product for checkout
     */
    public placeOrder(productDetails) {
        this.submitted = true;
        if (productDetails.length === 0) {
            this.snackBar.open('Add items to place order', '×', {panelClass: 'error', verticalPosition: 'bottom', duration: 3000});
            return;
        }
        if (!this.checkoutForm.valid) {
            return;
        }

        console.log('productDetails', productDetails);
        let params = this.checkoutForm.value;
        params.productDetail = productDetails;
        this.productControlSandbox.PlaceOrder(params);
    }
    /**
     * increase or decrease product count
     *
     * @param product added product details
     * @param operation differentiate the operation is increament operation or decrement operation
     */
    changeCount(product, operation) {
        console.log('product', product);
        this.productControlSandbox.ChangeCount(product, operation);
    }
    // remove product from the cart, calling removeItemFromCart function from sandbox
    removeProduct(product) {
        this.productControlSandbox.removeItemFromCart(product);
    }
    // clear cart, for remove all products in the cart
    public clear() {
        this.productControlSandbox.clearCart();
    }
}
