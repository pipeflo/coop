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
import {Effect, Actions} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators';
import * as actions from '../currency-action/currency.actions';
import {CurrencyListResponseModel} from '../currency-model/currencylist.response.model';
import {CurrencyService} from '../currency.service';
import {CurrencyNewResponse} from '../currency-model/currencynewResponse.model';

@Injectable()

export class CurrencyEffect {

//currency list
    @Effect()
    docurrencyList$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_CURRENCY_LIST)
        .pipe(
            map((action: actions.DoCurrencyListAction) => action.payload),
            switchMap((state) => {
                console.log('state', state);
                return this.currencyService.currencyList(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoCurrencyListSuccess(user),
                        ]),
                        catchError(error => of(new actions.DoCurrencyFail(error)))
                    );
            })
        );
    //currency list count
    @Effect()
    docurrencyListCount$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_CURRENCY_LIST_COUNT)
        .pipe(
            map((action: actions.DoCurrencyListCountAction) => action.payload),
            switchMap((state) => {
                console.log('count state', state);
                return this.currencyService.currencyListCount(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoCurrencyListCountSuccess((user)),
                        ]),
                        catchError(error => of(new actions.DoCurrencyCountFail(error)))
                    );
            })
        );
    //new  currency add
    @Effect()
    docurrencyNew$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_CURRENCY_LIST_NEW)
        .pipe(
            map((action: actions.DoCurrencyNewAction) => action.payload),
            switchMap((state) => {
                console.log('count state', state);
                return this.currencyService.currencynew(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoCurrencyNewSuccess(user),
                        ]),
                        catchError(error => of(new actions.DoCurrencyNewFail(error)))
                    );
            })
        );
    // update currency
    @Effect()
    docurrencyUpdate$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_CURRENCY_UPDATE)
        .pipe(
            map((action: actions.DoCurrencyUpdateAction) => action.payload),
            switchMap((state) => {
                console.log('count state', state);
                return this.currencyService.currencyupdate(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoCurrencyUpdateSuccess(user),
                        ]),
                        catchError(error => of(new actions.DoCurrencyUpdateFail(error)))
                    );
            })
        );
    // currency delete
    @Effect()
    doCustomerDelete$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_CURRENCY_DELETE)
        .pipe(
            map((action: actions.DoCurrencyDeleteAction) => action.payload),
            switchMap((state) => {
                console.log('state', state.currencyId);
                const currencyId = state.currencyId;

                console.log('effect state', state.customerId);
                return this.currencyService.deleteCurrency(state, currencyId)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoCurrencyDeleteSuccess((user)),
                        ]),
                        catchError(error => of(new actions.DoCurrencyDeleteFail(error)))
                    );
            })
        );

    //delete currency
    // @Effect()
    // docurrencyDelete$:Observable<Action> = this.action$
    //     .ofType(actions.ActionTypes.DO_CURRENCY_DELETE)
    //     .pipe(
    //         map((action:actions.DoCurrencyDeleteAction) => action.payload),
    //         switchMap((state) => {
    //          console.log('delete state', state.currencyId);
    //          const currencyId = state.currencyId;
    //          return this.currencyService.deleteCurrency(state, currencyId)
    //          .pipe(
    //           switchMap((user) => [
    //              new actions.DoCurrencyDeleteSuccess(user),
    //             ]),
    //             catchError(error => of(new actions.DoCurrencyDeleteFail(error)))
    //           );
    //         })
    //     );

    constructor(private action$: Actions,
                private currencyService: CurrencyService) {
    }

}
