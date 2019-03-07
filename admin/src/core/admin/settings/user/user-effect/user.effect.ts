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
import * as actions from '../user-action/user.action';
import {UserService} from "../user.service";
import {UserResponseModel} from "../user-model/user.response.model";
import {UserListResponseModel} from "../user-model/userlist.response.model";


@Injectable()
export class UserEffect {

    // NEW USER
    @Effect()
    doAddUser$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_NEW_USER)
        .pipe(
            map((action: actions.DoNewUserAction) => action.payload),
            switchMap((state) => {
                console.log('state', state);
                return this.service.addUser(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoNewUserSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoNewUserFailAction(error)))
                    );
            })
        );
    // UPDATE USER
    @Effect()
    doUpdateUser$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_UPDATE_USER)
        .pipe(
            map((action: actions.DoUpdateUserAction) => action.payload),
            switchMap((state) => {
                console.log('state', state.id);
                const Id = state.id;
                return this.service.updateUser(state, Id)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoUpdateUserSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoUpdateUserFailAction(error)))
                    );
            })
        );
    @Effect()
    doUserGroupList$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.GET_USER_GROUP_LIST)
        .pipe(
            map((action: actions.DoUserGroupListAction) => action.payload),
            switchMap((state) => {
                return this.service.userGrouplist(state)
                    .pipe(
                        map((analysis) => new actions.DoUserGroupListSuccessAction(analysis)),
                        catchError(error => of(new actions.DoUserGroupListFailAction(error)))
                    );
            })
        );
    // LIST-USER GROUP
    // LIST-USERLIST
    @Effect()
    doUserList$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.GET_USER_LIST)
        .pipe(
            map((action: actions.DoUserListAction) => action.payload),
            switchMap((state) => {
                return this.service.userlist(state)
                    .pipe(
                        map((analysis) => new actions.DoUserListSuccessAction(analysis)),
                        catchError(error => of(new actions.DoUserListFailAction(error)))
                    );
            })
        );
    // USER LIST PAGINATION
    @Effect()
    douserpagination$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_USER_COUNT_ACTION)
        .pipe(
            map((action: actions.DoUserPaginationAction) => action.payload),
            switchMap((state) => {
                console.log('effect state', state);
                return this.service.userpagiantion(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoUserPaginationSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoUserPaginationFailAction(error)))
                    );
            })
        );

    constructor(private action$: Actions, private service: UserService) {
    }


}
