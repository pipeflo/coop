/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

export class ViewordersModel {


    public orderId: Number;

    constructor(Vieworders: any) {
        this.orderId =  Vieworders.orderId || '';

    }
}