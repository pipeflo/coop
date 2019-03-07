/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultCommonModule} from '../../../../../default.common.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import {StockStatusAddComponent} from './add/add.component';
import {StockStatusListComponent} from './list/list.component';

// Store Actions
import {EffectsModule} from '@ngrx/effects';
import {StockEffects} from '../../../../../../../core/admin/settings/localizations/stockStatus/stock-effect/stock.effect';
import {StockSandbox} from '../../../../../../../core/admin/settings/localizations/stockStatus/stock.sandbox';
import {StockService} from '../../../../../../../core/admin/settings/localizations/stockStatus/stock.service';

// Routing Module
import {StockStatusRoutingModule} from './stockstatus.routing';

// Shared Module
import {MaterialModule} from '../../../../../default.material.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
    declarations: [
        StockStatusAddComponent,
        StockStatusListComponent,
    ],
    imports: [
        CommonModule,
        DefaultCommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        StockStatusRoutingModule,
        EffectsModule.forRoot([StockEffects]),
        TranslateModule.forChild()
    ],
    providers: [
        StockService,
        StockSandbox
    ],
    bootstrap: [],
    entryComponents: []
})

export class StockStatusModule {
}
