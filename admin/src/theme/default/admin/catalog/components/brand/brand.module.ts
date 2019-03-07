/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultCommonModule} from '../../../../default.common.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import {BrandAddComponent} from './add/add.component';
import {BrandListComponent} from './list/list.component';

// Store Actions
import {EffectsModule} from '@ngrx/effects';

// Routing Module
import {BrandRoutingModule} from './brand.routing';

// Shared Module
import {MaterialModule} from '../../../../default.material.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    BrandAddComponent,
    BrandListComponent,
  ],
  imports: [
    CommonModule,
    DefaultCommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrandRoutingModule,
      TranslateModule.forChild(),
  ],
  providers: [],
  bootstrap: [],
  entryComponents: []
})

export class BrandModule {}
