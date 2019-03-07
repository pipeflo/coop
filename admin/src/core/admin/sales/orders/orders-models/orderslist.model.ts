/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

export class OrderslistModel {


    public limit: string;
    public offset: string;
    public orderId: string;
    public totalAmount: string;
    public dateAdded: string;
    public keyword: string;
    public customerName: string;
    public count: number;

    constructor(OrdersListForm: any) {
        this.limit = OrdersListForm.limit || '';
        this.offset = OrdersListForm.offset || '';
        this.orderId = OrdersListForm.orderId || '';
        this.totalAmount = OrdersListForm.totalAmount || '';
        this.dateAdded = OrdersListForm.dateAdded || '';
        this.keyword = OrdersListForm.keyword || '';
        this.customerName = OrdersListForm.customerName || '';
        this.count = OrdersListForm.count || 0;
    }
}
