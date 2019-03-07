/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {DefaultRoutingModule} from './admin-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../../../environments/environment';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DefaultComponent} from './admin.component';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from '../../../core/app.reducers';
import { HTTPStatus, RequestInterceptor} from '../../../core/admin/providers/CommonInterceptor';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {CommonModule ,  HashLocationStrategy, LocationStrategy} from '@angular/common';
import {MaterialModule} from '../default.material.module';
import {AppApiClient} from '../../../core/appApiClient.service';
import {AuthGuard} from '../../../core/admin/providers/auth.guard';
import {EditprofileComponent} from './layout/editprofile/editprofile.component';
import {AuthService} from '../../../core/admin/auth/auth.service';
import {AuthSandbox} from '../../../core/admin/auth/auth.sandbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {EditprofileService} from '../../../core/admin/profile/editprofile/editprofile.service';
import {EditprofileSandbox} from '../../../core/admin/profile/editprofile/editprofile.sandbox';
import {ConfigService} from '../../../core/admin/service/config.service';
import {ToastrModule} from 'ng6-toastr-notifications';

import {ComponentsModule} from './shared/components';
import {DefaultCommonModule} from '../default.common.module';

// Components
import {CONTAINERS, ContainersModule} from './layout/index';
import {EditprofileEffect} from '../../../core/admin/profile/editprofile/effect/editprofile.effect';
import {MediaEffects} from '../../../core/admin/catalog/media/effects/media.effect';
import {MediaService} from '../../../core/admin/catalog/media/media.service';
import {ImagemanagerpopupComponent} from './shared/model-popup/ImageManagerPopup/imagemanagerpopup.component';
import {OrderstatusEffects} from '../../../core/admin/settings/localizations/orderstatus/orderstatus-effects/orderstatus.effects';
import {OrderstatusSandbox} from '../../../core/admin/settings/localizations/orderstatus/orderstatus.sandbox';
import {OrderstatusApiClientService} from '../../../core/admin/settings/localizations/orderstatus/orderstatus-ApiClientService';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/');
}

export function configServiceFactory(config: ConfigService) {
  return () => config.load();
}

// ConfigService
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    DefaultComponent,
    EditprofileComponent,
      ImagemanagerpopupComponent,
    CONTAINERS.AuthLayoutComponent,
    CONTAINERS.CommonLayoutComponent
  ],
  imports: [
    BrowserModule,
    DefaultRoutingModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    FormsModule,
    ContainersModule,
    ComponentsModule,
    DefaultCommonModule,
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    StoreModule.forRoot(reducers, {metaReducers}),
      EffectsModule.forRoot([EditprofileEffect, OrderstatusEffects]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: ConfigService) => () => config.load(),
      deps: [ConfigService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    HTTPStatus,
    AppApiClient,
    AuthGuard,
    AuthService, AuthSandbox,
    EditprofileSandbox, EditprofileService,
      OrderstatusSandbox, OrderstatusApiClientService
  ],

  bootstrap: [DefaultComponent],
  entryComponents: [ImagemanagerpopupComponent]
})
export class AdminModule {
}
