/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as actions from '../action/layout.action';
import { catchError } from 'rxjs/internal/operators';
import { LayoutService } from '../layout.service';


@Injectable()
export class LayoutEffects {

  constructor(private action$: Actions, private layoutService: LayoutService) {
  }

  @Effect()
  doTotalCustomerListCount$: Observable<Action> = this.action$
    .ofType(actions.ActionTypes.GET_TOTAL_CUSTOMER_COUNT)
    .pipe(
      map((action: actions.GetTotalCustomerCountAction) => action.payload),
      switchMap((state) => {
        console.log('effect state', state);
        return this.layoutService.getCustomerListCount(state)
          .pipe(
            switchMap((response) => [
              new actions.GetTotalCustomerCountSuccessAction(response),
            ]),
            catchError(error => of(new actions.GetTotalCustomerCountFailAction(error)))
          );
      })
    );

  @Effect()
  doActiveCustomerListCount$: Observable<Action> = this.action$
    .ofType(actions.ActionTypes.GET_ACTIVE_CUSTOMER_COUNT)
    .pipe(
      map((action: actions.GetActiveCustomerCountAction) => action.payload),
      switchMap((state) => {
        console.log('effect state', state);
        return this.layoutService.getCustomerListCount(state)
          .pipe(
            switchMap((response) => [
              new actions.GetActiveCustomerCountSuccessAction(response),
            ]),
            catchError(error => of(new actions.GetActiveCustomerCountFailAction(error)))
          );
      })
    );

  @Effect()
  doInActiveCustomerListCount$: Observable<Action> = this.action$
    .ofType(actions.ActionTypes.GET_INACTIVE_CUSTOMER_COUNT)
    .pipe(
      map((action: actions.GetInActiveCustomerCountAction) => action.payload),
      switchMap((state) => {
        console.log('effect state', state);
        return this.layoutService.getCustomerListCount(state)
          .pipe(
            switchMap((response) => [
              new actions.GetInActiveCustomerCountSuccessAction(response),
            ]),
            catchError(error => of(new actions.GetInActiveCustomerCountFailAction(error)))
          );
      })
    );


}
