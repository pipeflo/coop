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
import * as actions from '../generalsetting-action/generalsetting.action';
import {GeneralSettingService} from '../generalsetting.service';

@Injectable()
export class GeneralSettingEffect {


    constructor(private action$: Actions, private service: GeneralSettingService) {
    }

    // NEW USER
    @Effect()
    doAddUser$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_NEW_GENERAL_SETTINGS)
        .pipe(
            map((action: actions.DoNewGeneralSettingAction) => action.payload),
            switchMap((state) => {
                console.log('state', state);
                return this.service.createGeneralSetting(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoNewGeneralSettingSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoNewGeneralSettingFailAction(error)))
                    );
            })
        );

    // GET GENERAL SETTINGS
    @Effect()
    dogetGeneralsetting$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_GET_GENERAL_SETTINGS)
        .pipe(
            map((action: actions.DoGetGeneralSettingAction) => action.payload),
            switchMap(() => {
                console.log('state logout');
                return this.service.getGeneralSetting()
                    .pipe(
                        switchMap((user) => {
                            return [
                                new actions.DoGetGeneralSettingSuccessAction((user)),
                            ];
                        }),
                        catchError(error => of(new actions.DoGetGeneralSettingFailAction()))
                    );
            })
        );


}
