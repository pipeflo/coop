/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class StockStatusModel {


    public name: string;
    public status: number;
    public stockStatusId: number;

    constructor(stockstatusmodel: any) {
        console.log('countryform', stockstatusmodel);
        this.name = stockstatusmodel.name || '';
        this.status = stockstatusmodel.status || '';
        if (stockstatusmodel.stockStatusId) {
            this.stockStatusId = stockstatusmodel.stockStatusId || '';
        }
    }
}
