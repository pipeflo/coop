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
import * as actions from './../action/common.action';
import {CommonService} from "../common.service";

@Injectable()
export class CommonEffect {
    constructor(private actions$: Actions,
                private authApi: CommonService,
                private appState$: Store<store.AppState>) {
    }

    @Effect()
    getWishlistCount$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_WISHLIST_COUNT),
            map((action: actions.GetWishlistCount) => action.payload),
            switchMap((state) => {
                return this.authApi.getWishlistCount(state)
                    .pipe(
                        map((wishlish) => new actions.GetWishlistCountSuccess(wishlish)),
                        catchError(error => of(new actions.GetWishlistCountFail(error)))
                    );
            })
        );
    @Effect()
    getProfile$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_PROFILE),
            map((action: actions.GetProfile) => action.payload),
            switchMap((state) => {
                return this.authApi.doGetProfile(state)
                    .pipe(
                        map((profile) => new actions.GetProfileSuccess(profile)),
                        catchError(error => of(new actions.GetProfileFail(error)))
                    );
            })
        );
}