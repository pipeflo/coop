/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

import {Injectable} from '@angular/core';
// effects
import {Effect, Actions} from '@ngrx/effects';
// store
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
// actions
import * as actions from '../product-action/product.action';
import {catchError} from 'rxjs/internal/operators';
// service
import {ProductService} from "../product.service";


@Injectable()
export class ProductEffect {
    // Product list
    @Effect()
    doprodlists$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.GET_PRODUCT_LIST)
        .pipe(
            map((action: actions.GetProductlistAction) => action.payload),
            switchMap((state) => {
                return this.service.productList(state)
                    .pipe(
                        switchMap((product) => [
                            new actions.GetProductlistSuccessAction(product),
                        ]),
                        catchError(error => of(new actions.GetProductlistFailAction(error)))
                    );
            })
        );
    // Product list count
    @Effect()
    doprodlistscount$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.GET_PRODUCT_COUNT)
        .pipe(
            map((action: actions.GetProductCountAction) => action.payload),
            switchMap((state) => {
                return this.service.productCount(state)
                    .pipe(
                        map((count) => new actions.GetProductCountSuccessAction(count)),
                        catchError(error => of(new actions.GetProductCountFailAction(error)))
                    );
            })
        );
    // Product delete
    @Effect()
    doProductDelete$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_PRODUCT_DELETE)
        .pipe(
            map((action: actions.DoProductDeleteAction) => action.payload),
            switchMap((state) => {
                return this.service.productDelete(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoProductDeleteSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoProductDeleteFailAction(error)))
                    );
            })
        );
    // Product add
    @Effect()
    doProductAdd$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_PRODUCT_ADD)
        .pipe(
            map((action: actions.DoProductAddAction) => action.payload),
            switchMap((state) => {
                return this.service.productAdd(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoProductAddSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoProductAddFailAction(error)))
                    );
            })
        );
    // Product update
    @Effect()
    doProductUpdate$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_PRODUCT_UPDATE)
        .pipe(
            map((action: actions.DoProductUpdateAction) => action.payload),
            switchMap((state) => {
                console.log('effect state', state);
                return this.service.productUpdate(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoProductUpdateSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoProductUpdateFailAction(error)))
                    );
            })
        );
    // Product detail
    @Effect()
    doDetail$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.GET_PRODUCT_DETAIL)
        .pipe(
            map((action: actions.GetProductDetailAction) => action.payload),
            switchMap((state) => {
                console.log('effect state', state);
                return this.service.productDetail(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.GetProductDetailSuccess(user),
                        ]),
                        catchError(error => of(new actions.GetProductDetailFail(error)))
                    );
            })
        );


    // IS Feature

    @Effect()
    doProductIsFeature$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_IS_FEATURE_DETAIL)
        .pipe(
            map((action: actions.DoProductDetailIsFeatureAction) => action.payload),
            switchMap((state) => {
                console.log('effect state', state);
                return this.service.productIsfeature(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoProductDetailIsFeatureSuccess(user),
                        ]),
                        catchError(error => of(new actions.DoProductDetailIsFeatureFail(error)))
                    );
            })
        );

    constructor(private action$: Actions, private service: ProductService) {
    }

}
