/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

export class ProductListResponseModel {

  public productId: number;
  public sku: string;
  public quantity: number;
  public image: string;
  public imagePath: string;
  public price: number;
  public name: string;
  public isActive: number;
  public productToCategory: any;
  public productImage: any;

  constructor(productlistResponse: any) {
    console.log('product list response', productlistResponse);

    this.productId = productlistResponse.productId || 0;
    this.sku = productlistResponse.sku || '';
    this.quantity = productlistResponse.quantity || 0;
    this.image = productlistResponse.image || '';
    this.imagePath = productlistResponse.imagePath || '';
    this.price = productlistResponse.price || 0;
    this.name = productlistResponse.name || '';
    this.isActive = productlistResponse.isActive || 0;
    this.productToCategory = productlistResponse.productToCategory || [];
    this.productImage = productlistResponse.productImage || [];
  }
}
