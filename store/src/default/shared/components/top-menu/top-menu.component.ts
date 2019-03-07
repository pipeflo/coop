/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConfigService} from '../../../../core/service/config.service';
import {CommonSandbox} from '../../../../core/common/common.sandbox';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
})
export class TopMenuComponent implements OnInit {
    imagePath: any;
    accountMenuTrigger: any;
  constructor(public configService: ConfigService,
              public router: Router,
              public commonSandbox: CommonSandbox) { }

  ngOnInit() {
      this.imagePath = this.configService.get('resize').imageUrl;
      if (localStorage.getItem('userToken')) {
          this.commonSandbox.doGetProfile();
          let params: any = {};
          params.limit = '';
          params.offset = 0;
          params.count = true;
          this.commonSandbox.getWishlistCounts(params);
      }
  }

    signOut() {
    localStorage.clear();
    this.commonSandbox.doSignout();
    this.router.navigate(['/sign-in']);
    }

}
