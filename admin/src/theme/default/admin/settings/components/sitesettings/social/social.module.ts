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

// components

// Store Actions
import {EffectsModule} from '@ngrx/effects';

// Routing Module

// Shared Module
import {TranslateModule} from '@ngx-translate/core';
import {MaterialModule} from '../../../../../default.material.module';
import {DefaultCommonModule} from '../../../../../default.common.module';
import {SocialRouting} from './social.routing';
import {SocialComponents} from './social.components';
import {CountryEffect} from '../../../../../../../core/admin/settings/localizations/country/country-effect/country.effect';
import {CurrencyEffect} from '../../../../../../../core/admin/settings/localizations/currency/currency-effect/currency.effects';
import {ZoneEffect} from '../../../../../../../core/admin/settings/localizations/zone/zone-effect/zone.effect';
import {LanguagesEffect} from '../../../../../../../core/admin/settings/localizations/languages/languages-effect/languages.effect';
import {SocialEffect} from '../../../../../../../core/admin/settings/siteSettings/social/social-effect/social.effect';
import {SocialService} from '../../../../../../../core/admin/settings/siteSettings/social/social.service';
import {SocialSandbox} from '../../../../../../../core/admin/settings/siteSettings/social/social.sandbox';
import {CountrySandbox} from '../../../../../../../core/admin/settings/localizations/country/country.sandbox';
import {SettingsModule} from "../../../settings.module";


@NgModule({
    declarations: [
        SocialComponents

    ],
    imports: [
        CommonModule,
        DefaultCommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        SocialRouting,
        TranslateModule.forChild(),
        EffectsModule.forRoot([SocialEffect])

    ],
    providers: [
        SocialSandbox, SocialService
    ],
    bootstrap: [],
    entryComponents: []
})

export class SocialModule {
}
