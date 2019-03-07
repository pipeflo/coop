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
import * as actions from '../action/editprofile.action';
import {catchError} from 'rxjs/internal/operators';
import { EditprofileService} from "../editprofile.service";
import { EditprofileResponseModel} from "../models/editprofile.response.model";


@Injectable()
export class EditprofileEffect {

    constructor(private action$:Actions, private service: EditprofileService) {
    }



    @Effect()
    doEditProfile$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_EDIT_PROFILE)
        .pipe(
            map((action: actions.DoEditprofileAction) => action.payload),
            switchMap((state) => {
                console.log('state', state);
                return this.service.editProfile(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoEditprofileSucessAction(new EditprofileResponseModel(user)),
                        ]),
                        catchError(error => of(new actions.DoEditprofileFailAction(error)))
                    );
            })
        );

}
