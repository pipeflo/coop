/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class UserlistForm {


  public limit: number;
  public offset: number;
  public keyword: string;
  public count: number;



  constructor(userlistForm: any)
  {
    console.log('userlistForm model',userlistForm );
    this.limit = userlistForm.limit || '';
    this.offset = userlistForm.offset || '';
    this.keyword = userlistForm.keyword || '';
    this.count = userlistForm.count || '';

  }
}
