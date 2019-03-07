/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class OrderstatusForm {


    public name: String;
    public status: number;
    public id: number;

    constructor(OrderstatusForm: any) {
        console.log(OrderstatusForm);
        this.name = OrderstatusForm.name || '';
        this.status = OrderstatusForm.status;
        if (OrderstatusForm.orderStatusId) {
            this.id = OrderstatusForm.orderStatusId || '';
        }
    }
}
