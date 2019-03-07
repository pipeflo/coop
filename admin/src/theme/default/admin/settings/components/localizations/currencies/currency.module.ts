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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';

// Store Actions
import {ToastrModule} from 'ng6-toastr-notifications';
import {EffectsModule} from '@ngrx/effects';
import {CurrencyEffect} from '../../../../../../../core/admin/settings/localizations/currency/currency-effect/currency.effects';

// Routing Module
import {CurrencyRoutingModule} from './currency.routing';

// Shared Module
import {MaterialModule} from '../../../../../default.material.module';

// Components
import {CurrencyAddComponent} from './add/add.component';
import {CurrencyListComponent} from './list/list.component';

// Service
import {CurrencySandbox} from '../../../../../../../core/admin/settings/localizations/currency/currency.sandbox';
import {CurrencyService} from '../../../../../../../core/admin/settings/localizations/currency/currency.service';


// Transalate
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SettingsModule} from "../../../settings.module";

@NgModule({
    declarations: [CurrencyAddComponent, CurrencyListComponent],
    imports: [
        CurrencyRoutingModule,
        EffectsModule,
        ToastrModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        TranslateModule,
        NgbModule,

    ],
    providers: []


})


export class CurrencyModule {
}
