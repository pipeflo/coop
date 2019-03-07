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

// components
import {CategoryAddComponent} from './add/add.component';
import {CategoriesListComponent} from './list/list.component';
import {CategoriesFilterComponent} from './filter/filter.component';

// Store Actions
import {EffectsModule} from '@ngrx/effects';

// Routing Module
import {CategoriesRoutingModule} from './categories.routing';

// Shared Module
import {MaterialModule} from '../../../../default.material.module';
import {TranslateModule} from "@ngx-translate/core";
import {CategoriesEffect} from "../../../../../../core/admin/catalog/category/effects/categories.effect";
import {CategoriesService} from "../../../../../../core/admin/catalog/category/categories.service";
import {CategoriesSandbox} from "../../../../../../core/admin/catalog/category/categories.sandbox";

@NgModule({
    declarations: [
        CategoryAddComponent,
        CategoriesListComponent,
        CategoriesFilterComponent
    ],
    imports: [
        CommonModule,
        DefaultCommonModule,
        FormsModule,
        ReactiveFormsModule,
        CategoriesRoutingModule,
        MaterialModule,
        TranslateModule.forChild(),
        EffectsModule.forRoot([]),
    ],
    providers: [

        CategoriesSandbox
    ],
    bootstrap: [],
    entryComponents: []
})

export class CategoriesModule {
}
