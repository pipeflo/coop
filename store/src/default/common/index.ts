/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutContainer} from './layout/layout.container';
import {ComponentsModule} from "../shared/components/index";
import {SharedModule} from "../shared/shared.module";
import {EffectsModule} from "@ngrx/effects";


export const CONTAINERS = {
    LayoutContainer
};
@NgModule({
  imports: [
      CommonModule,
      ComponentsModule,
      SharedModule,
  ],
  declarations: [],
  providers: []
})
export class ContainerModule {
}
