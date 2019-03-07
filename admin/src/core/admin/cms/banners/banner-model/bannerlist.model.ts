/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

export class BannerlistModel {


  public limit: number;
  public offset: number;
  public keyword: string;



  constructor(bannerlistForm: any)
  {
    this.limit = bannerlistForm.limit || 0;
    this.offset = bannerlistForm.offset || 0;
    this.keyword = bannerlistForm.keyword || '';

  }
}
