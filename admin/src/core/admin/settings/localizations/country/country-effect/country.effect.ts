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
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators';
import {CountryService} from '../country.service';
import * as actions from '../country-action/country.action';


@Injectable()
export class CountryEffect {

    // NEW COUNTRY
    @Effect()
    doAddCountry$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_NEW_COUNTRY)
        .pipe(
            map((action: actions.DoNewCountryAction) => action.payload),
            switchMap((state) => {
                console.log('state', state);
                return this.service.addCountry(state)
                    .pipe(
                        switchMap((role) => [
                            new actions.DoNewCountrySuccessAction(role),
                        ]),
                        catchError(error => of(new actions.DoNewCountryFailAction(error)))
                    );
            })
        );
    // UPDATE COUNTRY
    @Effect()
    doUpdateCountry$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_UPDATE_COUNTRY)
        .pipe(
            map((action: actions.DoUpdateCountrySuccessAction) => action.payload),
            switchMap((state) => {
                return this.service.updateCountry(state)
                    .pipe(
                        map((analysis) => new actions.DoUpdateCountrySuccessAction(analysis)),
                        catchError(error => of(new actions.DoUpdateCountryFailAction(error)))
                    );
            })
        );
    // COUNTRY LIST
    @Effect()
    docountrylists$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.GET_COUNTRY_LIST)
        .pipe(
            map((action: actions.GetCountrylistAction) => action.payload),
            switchMap((state) => {
                console.log('effect state', state);
                return this.service.countrylist(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.GetCountrylistSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.GetCountrylistFailAction(error)))
                    );
            })
        );
    // PAGINATION COUNTRY
    @Effect()
    docountrypagination$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.GET_COUNTRY_COUNT_ACTION)
        .pipe(
            map((action: actions.GetCountryCountAction) => action.payload),
            switchMap((state) => {
                console.log('effect state', state);
                return this.service.countrypagiantion(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.GetCountryCountSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.GetCountryCountFailAction(error)))
                    );
            })
        );
// COUNTRY DELETE
    @Effect()
    doCountryDelete$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_COUNTRY_DELETE)
        .pipe(
            map((action: actions.DoCountryDeleteAction) => action.payload),
            switchMap((state) => {
                const countryId = state.countryId;
                return this.service.deletecountry(state, countryId)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoCountryDeleteSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoCountryDeleteFailAction(error)))
                    );
            })
        );

    constructor(private action$: Actions, private service: CountryService) {
    }


}
