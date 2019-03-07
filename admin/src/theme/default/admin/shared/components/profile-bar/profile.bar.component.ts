/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import { Component, EventEmitter, Output, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-profile-bar',
  templateUrl: './profile.bar.component.html'
})
export class ProfileBarComponent  {

  @Output() toggleSidebar = new EventEmitter<void>();
  @Input() userDetails: any;
  @Output() logout: EventEmitter<any> = new EventEmitter();
  public showSearch = false;

  constructor() {
    // -----
  }

}
