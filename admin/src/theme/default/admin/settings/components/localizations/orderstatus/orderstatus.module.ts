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
import { CommonModule } from '@angular/common';
import { DefaultCommonModule } from '../../../../../default.common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { OrderStatusAddComponent } from './add/add.component';
import { OrderStatusListComponent } from './list/list.component';

// Store Actions
import { EffectsModule } from '@ngrx/effects';
import { OrderstatusApiClientService } from '../../../../../../../core/admin/settings/localizations/orderstatus/orderstatus-ApiClientService';
import { OrderstatusSandbox } from '../../../../../../../core/admin/settings/localizations/orderstatus/orderstatus.sandbox';
import { OrderstatusEffects } from '../../../../../../../core/admin/settings/localizations/orderstatus/orderstatus-effects/orderstatus.effects';

// Routing Module
import { OrderStatusRoutingModule } from './orderstatus.routing';

// Shared Module
import { MaterialModule } from '../../../../../default.material.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    OrderStatusAddComponent,
    OrderStatusListComponent,
  ],
  imports: [
    CommonModule,
    DefaultCommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    OrderStatusRoutingModule,
    // EffectsModule.forRoot([OrderstatusEffects]),
    TranslateModule.forChild()
  ],
  providers: [
    // OrderstatusApiClientService,
    // OrderstatusSandbox
  ],
  bootstrap: [],
  entryComponents: []
})

export class OrderStatusModule { }
