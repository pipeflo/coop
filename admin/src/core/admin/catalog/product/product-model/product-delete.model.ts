/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

export class ProductDeleteModel {


  public productId: number;

  constructor(productdeleteForm: any)
  {
    console.log('productdeleteForm', productdeleteForm);
    this.productId = productdeleteForm.productId || '';


  }
}
