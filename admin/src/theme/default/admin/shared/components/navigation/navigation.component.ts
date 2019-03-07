/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import { Component, AfterViewInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {

  @Output() toggleSidebar = new EventEmitter<void>();
  @Input() userDetails: any;
  @Output() logout: EventEmitter<any> = new EventEmitter();

  public showSearch = false;

  constructor(private router: Router) {
    // ---
  }

  ngAfterViewInit() {
    // ----
  }

}
