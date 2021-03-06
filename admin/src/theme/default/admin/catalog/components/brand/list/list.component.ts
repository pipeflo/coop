/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BrandSandbox} from '../../../../../../../core/admin/catalog/brand/brand.sandbox';
import {BrandApiClient} from '../../../../../../../core/admin/catalog/brand/brandApiClientservice';
import {ConfigService} from "../../../../../../../core/admin/service/config.service";


@Component({
  selector: 'app-catalog-brand-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']

})

export class BrandListComponent implements OnInit {
  // variables
  public pageoffset: number;
  public keyword = '';
  public offset: number;
  public pagesize = 5;
  public pageSizeOptions: number[] = [5, 10, 25, 100];
  public buttoncheck: boolean;
  public length: number ;
  private pagenationcount: boolean;
  public popoverContent: any;
  // image
  public imageUrl: string;

  constructor(
    public sandbox: BrandSandbox,
    private brandApi: BrandApiClient,
    private route: Router,
    public configService: ConfigService) {

  }

  ngOnInit() {
    this.pagenationcount = true;
    this.getManufacturerList();
    this.regSubscriptionEvents();
      this.imageUrl = this.configService.get('resize').imageUrl;
  }
    /**
   * Handles form 'getManufacturerList' event . Calls sandbox function manufacturerList manufacturerCountList if form is valid.
   * @param offset intial offset value
   */
  getManufacturerList(offset: number = 0) {
    const params: any = {};
    params.limit = this.pagesize;
    params.offset = offset;
    params.keyword = '';
    params.count = '';
    this.sandbox.manufacturerList(params);
    if (this.pagenationcount) {
      params.limit = '';
      params.count = 'true';
      this.sandbox.manufacturerCountList(params);
    }
  }

    /**
   * A function 'onPageChange' handle the page change event
   * @param event from event
   */
  onPageChange(event) {
    this.pagenationcount = false;
    this.pageoffset = (event.pageSize * event.pageIndex);
    this.pagesize = event.pageSize;
    this.getManufacturerList(this.pageoffset);
  }

    /**
   *  Handles form 'editManufacture' event. Calls brandApi Service setManufactureEditValue function if form is valid
   * @param editValue brand list data value
   */
  editManufacture(editValue ) {
    this.brandApi.setManufactureEditValue(editValue);
    this.route.navigate(['catalog/brand/edit', editValue.manufacturerId]);
  }
  // open add brand component form
  addBrand() {
    this.brandApi.setManufactureEditValue('');
    this.route.navigate(['catalog/brand/add']);

  }
   /**
   * A function 'deleteBrand' handle delete brandlist data
   * @param manufacturerId From manufacturerId
   */
  deleteBrand(manufacturerId , deletePop) {
    this.popoverContent = deletePop;
    event.stopPropagation();
    this.sandbox.deleteManufacturer({manufacturerId: manufacturerId});
  }
   // A function 'regSubscribeEvents'  call after getting delete response for pagination purpose
  regSubscriptionEvents() {
    this.sandbox.getManufacturerDelete$.subscribe(_delete => {
        if (_delete && _delete.status && _delete.status === 1) {
            this.pagenationcount = true;
            this.getManufacturerList(this.pageoffset);
        }
    });
}
}

