/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
// {orderStatusId: 150, name: "TRT", isActive: 1}


export class OrderStatusListResponseModel {
    public orderStatusId: number;
    public name: string;
    public isActive: number;
    constructor(listResponse: any) {
        console.log('lisrresponse', listResponse );
        this.orderStatusId = listResponse.orderStatusId || 0;
        this.name = listResponse.name || '';
        this.isActive = listResponse.isActive || 0;
    }
}

