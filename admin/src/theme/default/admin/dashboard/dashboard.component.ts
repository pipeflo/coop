/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import { Component, OnInit, Input } from '@angular/core';
import { horizontalbar, line, single } from '././data';
import { DashboardSandbox } from '../../../../core/admin/dashboard/dashboard.sandbox';
import { ConfigService } from '../../../../core/admin/service/config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  // providers: [ConfigService]
})
export class DashboardComponent implements OnInit {
  horizontalbar: any[];
  line: any[];
  single: any[];

  view: any[] = [750, 300];
  imageURL = this.configService.get('resize').imageUrl;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showLegend1 = true;
  colorScheme = {
    domain: ['blue']
  };
  colorScheme1 = {
    domain: ['#FF4172']
  };
  constructor(
    public dashboardSandbox: DashboardSandbox,
    private configService: ConfigService,
  ) {
    Object.assign(this, { horizontalbar, line, single });
  }

  ngOnInit() {
    this.dashboardSandbox.getOrderListCount({ count: 1 });
    this.dashboardSandbox.getProductListCount({ count: 1 });
    this.dashboardSandbox.getCustomerListCount({ count: 1 });
    this.dashboardSandbox.getTopSellingProductList();
    this.dashboardSandbox.getSalesOrderList();
    this.dashboardSandbox.getRecentVisitorList();
    this.dashboardSandbox.getVisitorLogsList();
    this.dashboardSandbox.getRecentSellingProductList();
  }
   // OnSelect Function
  onSelect(event) {
    console.log(event);
  }
}
