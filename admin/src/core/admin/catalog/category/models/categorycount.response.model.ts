/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

export class CategorycountResponseModel {

  public user: any = {};

  constructor(categorycountResponse: any) {
    console.log('response', categorycountResponse);

    this.user = categorycountResponse|| '';
    // localStorage.setItem('userToken', this.accessToken);

  }

}
