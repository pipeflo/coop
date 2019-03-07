/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

export class ProductAddModel {

  public productName: string;
  public productDescription: string;
  public upc: string;
  public sku: string;
  public image: string;
  public metaTagTitle: string;
  public categoryId: string;
  public model: any;
  public location:string;
  public price:string;
  public minimumQuantity:string;
  public quantity:string;
  public subtractStock:number;
  public outOfStockStatus:number;
  public requiredShipping:number;
  public dateAvailable:string;
  public status: any;
  public sortOrder: any;
  public condition: any;



  constructor(fromProductAdd: any)
  {
    this.productName = fromProductAdd.productName || '';
    this.productDescription = fromProductAdd.productDescription || '';
    this.upc = fromProductAdd.upc || '';
    this.sku = fromProductAdd.sku || '';
    this.image = fromProductAdd.image || '';
    this.metaTagTitle = fromProductAdd.metaTagTitle || '';
    this.categoryId = fromProductAdd.categoryId || '';
    this.model = fromProductAdd.model || '';
    this.location = fromProductAdd.location || '';
    this.price = fromProductAdd.price || '';
    this.minimumQuantity = fromProductAdd.minimumQuantity || '';
    this.quantity = fromProductAdd.quantity || '';
    this.subtractStock = fromProductAdd.subtractStock || '';
    this.outOfStockStatus = fromProductAdd.outOfStockStatus || '';
    this.requiredShipping = fromProductAdd.requiredShipping || '';
    this.dateAvailable = fromProductAdd.dateAvailable || '';
    this.status = fromProductAdd.status || '';
    this.sortOrder = fromProductAdd.sortOrder || '';
    this.condition = fromProductAdd.condition || '';

  }
}
