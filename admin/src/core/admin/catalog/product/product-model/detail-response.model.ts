/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

export class DetailResponseModel {
    public productId: number;
    public sku: string;
    public upc: string;
    public location: string;
    public quantity: number;
    public minimumQuantity: number;
    public subtractStock: number;
    public stockStatusId: number;
    public manufacturerId: string;
    public shipping: string;
    public dateAvailable: string;
    public sortOrder: string;
    public price: number;
    public name: string;
    public description: string;
    public metaTagTitle: string;
    public condition: string;
    public isActive: number;
    public Category: any;
    public productImage: any;

    constructor(detailResponse: any) {
        this.productId = detailResponse.productId || 0;
        this.sku = detailResponse.sku || '';
        this.upc = detailResponse.upc || '';
        this.location = detailResponse.location || '';
        this.shipping = detailResponse.shipping || '';
        this.dateAvailable = detailResponse.dateAvailable || '';
        this.sortOrder = detailResponse.sortOrder || '';
        this.quantity = detailResponse.quantity || 0;
        this.minimumQuantity = detailResponse.minimumQuantity || 0;
        this.subtractStock = detailResponse.subtractStock || 0;
        this.stockStatusId = detailResponse.stockStatusId || 0;
        this.manufacturerId = detailResponse.manufacturerId || 0;
        this.price = detailResponse.price || 0;
        this.name = detailResponse.name || '';
        this.description = detailResponse.description || '';
        this.metaTagTitle = detailResponse.metaTagTitle || '';
        this.condition = detailResponse.condition || '';
        this.isActive = detailResponse.isActive || 0;
        this.Category = detailResponse.Category || [];
        this.productImage = detailResponse.productImage || [];
    }
}
