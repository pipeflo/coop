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
import * as actions from '../changepassword-action/changepassword.action';
import {catchError} from 'rxjs/internal/operators';
import {ChangePasswordService} from "../changepassword.service";
import {ChangepasswordResponseModel} from "../changepassword-models/changepassword.response.model";


@Injectable()
export class ChangepasswordEffect {

    constructor(private action$: Actions, private service: ChangePasswordService) {
    console.log('change pass effects');
    }

    @Effect()
    doChangePassword$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_CHANGE_PASWORD)
        .pipe(
            map((action: actions.DoChangePasswordAction) => action.payload),
            switchMap((state) => {
                return this.service.changePassword(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoChangePasswordSucessAction(new ChangepasswordResponseModel(user)),
                        ]),
                        catchError(error => of(new actions.DoChangePasswordFailAction(error)))
                    );
            })
        );

}
