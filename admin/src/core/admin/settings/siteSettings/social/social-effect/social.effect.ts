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
import * as actions from '../social-action/social.action';
import { SocialService} from '../social.service';

@Injectable()
export class SocialEffect {


    constructor(private action$: Actions, private service: SocialService) {
    }

    // NEW USER
    @Effect()
    doAddsocial$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_NEW_SOCIAL)
        .pipe(
            map((action: actions.DoNewSocialAction) => action.payload),
            switchMap((state) => {
                console.log('state', state);
                return this.service.createsocial(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoNewSocialSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoNewSocialFailAction(error)))
                    );
            })
        );

    // GET GENERAL SETTINGS
    @Effect()
    dogetsocial$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_GET_SOCIAL)
        .pipe(
            map((action: actions.DoGetSocialAction) => action.payload),
            switchMap(() => {
                console.log('state logout');
                return this.service.getSocial()
                    .pipe(
                        switchMap((user) => {
                            return [
                                new actions.DoGetSocialSuccessAction((user)),
                            ];
                        }),
                        catchError(error => of(new actions.DoGetSocialFailAction()))
                    );
            })
        );


}
