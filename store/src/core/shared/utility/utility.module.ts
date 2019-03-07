/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {
  NgModule,
  ModuleWithProviders
}                            from "@angular/core";
import { UtilService }       from './utility.service';
import { ValidationService } from './validation.service';

@NgModule()
export class UtilityModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilityModule,

      providers: [
        UtilService,
        ValidationService
      ]
    };
  }
}