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
import {DefaultCommonModule} from '../../../../default.common.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Store Actions
import {EffectsModule} from '@ngrx/effects';
import {CountrySandbox} from '../../../../../../core/admin/settings/localizations/country/country.sandbox';
import {CountryEffect} from '../../../../../../core/admin/settings/localizations/country/country-effect/country.effect';
import {CurrencyEffect} from '../../../../../../core/admin/settings/localizations/currency/currency-effect/currency.effects';
import {LanguagesEffect} from '../../../../../../core/admin/settings/localizations/languages/languages-effect/languages.effect';
import {ZoneEffect} from '../../../../../../core/admin/settings/localizations/zone/zone-effect/zone.effect';
import {GeneralSettingEffect} from '../../../../../../core/admin/settings/generalsetting/generalsetting-effect/generalsetting.effect';
// Component
import {GeneralSettingComponent} from './generalsettings/generalsettings.component';

// Routing Module
import {GenaeralSettingsRoutingModule} from './generalsettings.routing';

// Shared Module
import {MaterialModule} from '../../../../default.material.module';
import {TranslateModule} from '@ngx-translate/core';
// Service And Sandbox
import {GeneralSettingSandbox} from '../../../../../../core/admin/settings/generalsetting/generalsetting.sandbox';
import {GeneralSettingService} from '../../../../../../core/admin/settings/generalsetting/generalsetting.service';

@NgModule({
    declarations: [
        GeneralSettingComponent
    ],
    imports: [
        CommonModule,
        DefaultCommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        GenaeralSettingsRoutingModule,
        EffectsModule.forRoot([GeneralSettingEffect]),
        TranslateModule.forChild()
    ],
    providers: [
        GeneralSettingSandbox, GeneralSettingService

    ],
    bootstrap: [],
    entryComponents: []
})

export class GeneralSettingsModule {
}
