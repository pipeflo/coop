/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class EditprofileResponseModel {

  public user: any = {};

  constructor(EditprofileResponseModel: any) {
    console.log('response', EditprofileResponseModel);

    this.user = EditprofileResponseModel|| '';
    // localStorage.setItem('userToken', this.accessToken);

  }

}
