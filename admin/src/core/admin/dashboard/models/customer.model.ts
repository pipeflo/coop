/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class CustomerModel {

  public limit: number;
  public offset: number;
  public name: string;
  public email: string;
  public customerGroup: string;
  public date: string;
  public count: string;





  constructor(params: any) {
    console.log('params', params);
    this.customerGroup = params.customerGroup || '';
    this.date = params.date || '';
    this.email = params.email || '';
    this.name = params.name || '';
    this.limit = params.limit || '';
    this.offset = params.offset || '';
    this.count = params.count || '';


  }
}
