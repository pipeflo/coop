/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as store from '../../state.interface';
import { catchError } from 'rxjs/internal/operators';
import * as actions from './../action/lists.action';
import {ListsService} from "../lists.service";

@Injectable()
export class ListsEffect {
    constructor(private actions$: Actions,
                private authApi: ListsService,
                private appState$: Store<store.AppState>) {
    }

    @Effect()
    getProducts$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_PRODUCT_LIST),
            map((action: actions.GetProductList) => action.payload),
            switchMap((state) => {
                return this.authApi.getProductList(state)
                    .pipe(
                        map((register) => new actions.GetProductListSuccess(register)),
                        catchError(error => of(new actions.GetProductListFail(error)))
                    );
            })
        );

    @Effect()
    getProductCount$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_PRODUCT_COUNT),
            map((action: actions.GetProductCount) => action.payload),
            switchMap((state) => {
                return this.authApi.getProductList(state)
                    .pipe(
                        map((register) => new actions.GetProductCountSuccess(register)),
                        catchError(error => of(new actions.GetProductCountFail(error)))
                    );
            })
        );


    @Effect()
    getCategory$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_CATEGORY_LIST),
            map((action: actions.GetCategoryList) => action.payload),
            switchMap((state) => {
                return this.authApi.getCategoryList(state)
                    .pipe(
                        map((category) => new actions.GetCategoryListSuccess(category)),
                        catchError(error => of(new actions.GetCategoryListFail(error)))
                    );
            })
        );
    @Effect()
    getRelatedProducts$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_RELATED_PRODUCT_LIST),
            map((action: actions.GetRelatedProductList) => action.payload),
            switchMap((state) => {
                return this.authApi.getRelatedProducts(state)
                    .pipe(
                        map((product) => new actions.RelatedProductListSuccess(product)),
                        catchError(error => of(new actions.RelatedProductListFail(error)))
                    );
            })
        );
     @Effect()
    getManufacturer$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_MANUFACTURER_LIST),
            map((action: actions.GetManufacturerList) => action.payload),
            switchMap((state) => {
                return this.authApi.getManufacturer(state)
                    .pipe(
                        map((manufacturer) => new actions.ManufacturerListSuccess(manufacturer)),
                        catchError(error => of(new actions.ManufacturerListtFail(error)))
                    );
            })
        );
    @Effect()
    getProductDetail$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_PRODUCT_DETAIL),
            map((action: actions.GetProductDetail) => action.payload),
            switchMap((state) => {
                console.log('getproducts...', state);
                return this.authApi.getProductDetail(state)
                    .pipe(
                        map((manufacturer) => new actions.GetProductDetailSuccess(manufacturer)),
                        catchError(error => of(new actions.GetProductDetailFail(error)))
                    );
            })
        );

    @Effect()
    bannerList$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_BANNER_LIST),
            map((action: actions.GetBannerList) => action.payload),
            switchMap((state) => {
                return this.authApi.getBannerList(state)
                    .pipe(
                        map((banner) => new actions.GetBannerListSuccess(banner)),
                        catchError(error => of(new actions.GetBannaerListFail(error)))
                    );
            })
        );
    @Effect()
    bannerCount$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_BANNER_LIST_COUNT),
            map((action: actions.GetBannerListCount) => action.payload),
            switchMap((state) => {
                return this.authApi.getBannerList(state)
                    .pipe(
                        map((count) => new actions.GetBannerListCountSuccess(count)),
                        catchError(error => of(new actions.GetBannaerListCountFail(error)))
                    );
            })
        );
    @Effect()
    featuredProduct$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_FEATURED_PRODUCT_LIST),
            map((action: actions.GetFeaturedProductList) => action.payload),
            switchMap((state) => {
                return this.authApi.getFeaturedListList(state)
                    .pipe(
                        map((featured) => new actions.GetFeaturedProductListSuccess(featured)),
                        catchError(error => of(new actions.GetFeaturedProductListFail(error)))
                    );
            })
        );
    @Effect()
    pageList$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_PAGE_LIST),
            map((action: actions.GetPageList) => action.payload),
            switchMap((state) => {
                return this.authApi.getPageList(state)
                    .pipe(
                        map((featured) => new actions.GetPageListSuccess(featured)),
                        catchError(error => of(new actions.GetPageListFail(error)))
                    );
            })
        );

    @Effect()
    getSettings$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_SETTINGS_ACTION),
            map((action: actions.GetSettings) => action.payload),
            switchMap((state) => {
                return this.authApi.getsettings()
                    .pipe(
                        map((featured) => new actions.GetSettingsSuccess(featured)),
                        catchError(error => of(new actions.GetSettingsFail(error)))
                    );
            })
        );
     @Effect()
    contactUs$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.DO_CONTACT_US_ACTION),
            map((action: actions.DoContactUsAction) => action.payload),
            switchMap((state) => {
                console.log('state....', state)
                return this.authApi.contacUs(state)
                    .pipe(
                        map((contact) => new actions.DoContactUsActionSuccess(contact)),
                        catchError(error => of(new actions.DoContactUsActionFail(error)))
                    );
            })
        );
      @Effect()
    pageDetail$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_PAGE_DETAIL),
            map((action: actions.GetPageDetails) => action.payload),
            switchMap((state) => {
                console.log('state....', state)
                return this.authApi.pageDetails(state)
                    .pipe(
                        map((contact) => new actions.GetPageDetailsSuccess(contact)),
                        catchError(error => of(new actions.GetPageDetailsSuccess(error)))
                    );
            })
        );
    @Effect()
    country$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_COUNTRY_LIST),
            map((action: actions.GetCountryList) => action.payload),
            switchMap((state) => {
                return this.authApi.getCountryList(state)
                    .pipe(
                        map((orders) => new actions.GetCountryListSuccess(orders)),
                        catchError(error => of(new actions.GetCountryListFail(error)))
                    );
            })
        );

}