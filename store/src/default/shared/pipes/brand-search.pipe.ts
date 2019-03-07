/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'brandSearchPipe', pure: false })
export class BrandSearchPipe implements PipeTransform {
  transform(brands, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (brands) {
      return brands.filter(brand => {
        if (brand.name) {
          return brand.name.search(searchText) !== -1;
        }
      });
    }
  }
}