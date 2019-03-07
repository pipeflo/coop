/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class AddAddressListForm {

  public limit: number;
  public offset: number;
  public count: string;





  constructor(addaddresslist: any)
  {
    console.log('addaddresslist',addaddresslist);
    this.limit = addaddresslist.limit || '';
    this.offset = addaddresslist.offset || '';
    this.count = addaddresslist.count || '';


  }
}
