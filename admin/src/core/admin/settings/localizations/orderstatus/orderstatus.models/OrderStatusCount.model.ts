/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class OrderStatusCountModel {


    public limit: number;
    public offset: number;
    public keyword: string;
    public count: string;

    constructor(orderstatuslistForm: any)
    {
        console.log('order status list', orderstatuslistForm);
        this.limit = orderstatuslistForm.limit || 0;
        this.offset = orderstatuslistForm.offset || 0;
        this.keyword = orderstatuslistForm.keyword || '';
        this.count = orderstatuslistForm.count || '';

    }
}
