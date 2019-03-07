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
import {DefaultCommonModule} from '../../default.common.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import {DashboardComponent} from './dashboard.component';

// Store Actions
import {EffectsModule} from '@ngrx/effects';
import {DashboardService} from '../../../../core/admin/dashboard/dashboard.service';
import {DashboardSandbox} from '../../../../core/admin/dashboard/dashboard.sandbox';
import {DashboardEffects} from '../../../../core/admin/dashboard/effects/dashboard.effect';


// Routing Module
import {DashboardRoutingModule} from './dashboard.routing';

// Shared Module
import {MaterialModule} from '../../default.material.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DefaultCommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DashboardRoutingModule,
    EffectsModule.forRoot([DashboardEffects]),
    TranslateModule.forChild()
  ],
  providers: [
    DashboardService,
    DashboardSandbox

  ],
  bootstrap: [],
  entryComponents: []
})

export class DashboardModule {}
