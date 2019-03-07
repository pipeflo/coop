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
import {ZoneAddComponent} from './add/add.component';
import {ZoneListComponent} from './list/list.component';

// Store Actions
import {EffectsModule} from '@ngrx/effects';
import {ZoneEffect} from '../../../../../../../core/admin/settings/localizations/zone/zone-effect/zone.effect';
import {ZoneService} from '../../../../../../../core/admin/settings/localizations/zone/zone.service';
import {ZoneSandbox} from '../../../../../../../core/admin/settings/localizations/zone/zone.sandbox';

// Routing Module
import {ZoneRoutingModule} from './zone.routing';

// Shared Module
import {MaterialModule} from '../../../../../default.material.module';
import {TranslateModule} from '@ngx-translate/core';
import {CountrySandbox} from "../../../../../../../core/admin/settings/localizations/country/country.sandbox";
import {CountryEffect} from '../../../../../../../core/admin/settings/localizations/country/country-effect/country.effect';
import {SettingsModule} from "../../../settings.module";


@NgModule({
    declarations: [
        ZoneAddComponent,
        ZoneListComponent,
    ],
    imports: [
        CommonModule,
        DefaultCommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        ZoneRoutingModule,
        TranslateModule.forChild()
    ],
    providers: [],
    bootstrap: [],
    entryComponents: []
})

export class ZoneModule {
}
