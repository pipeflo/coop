/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class ChangepasswordResponseModel {

  public user: any = {};

  constructor(changepasswordResponse: any) {
    console.log('response', changepasswordResponse);

    this.user = changepasswordResponse|| '';
      // localStorage.setItem('userToken', this.accessToken);

  }

}
