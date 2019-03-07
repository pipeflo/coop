/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class OrderslistResponseModel {
    public orderId: number;
    public totalAmount: string;
    public dateAdded: string;
    public keyword: string;
    public shippingFirstName: string;
    public dateModified: string;
    public isActive: number;


    constructor(responseOrdersListForm: any) {
        this.orderId = responseOrdersListForm.orderId || 0;
        this.totalAmount = responseOrdersListForm.total || '';
        this.dateAdded = responseOrdersListForm.createdDate || '';
        this.keyword = responseOrdersListForm.keyword || '';
        this.shippingFirstName = responseOrdersListForm.shippingFirstname || '';
        this.dateModified = responseOrdersListForm.modifiedDate || '';
        this.isActive = responseOrdersListForm.isActive || 0;
    }
}
