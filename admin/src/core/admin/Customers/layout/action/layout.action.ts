/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import { type } from '../../../auth/utility';
import { Action } from '@ngrx/store';

export const ActionTypes = {
  GET_TOTAL_CUSTOMER_COUNT: type('[CustomerLayout] Get Total Customer Count'),
  GET_TOTAL_CUSTOMER_COUNT_SUCCESS: type('[CustomerLayout] Get Total Customer Count Success'),
  GET_TOTAL_CUSTOMER_COUNT_FAIL: type('[CustomerLayout] Get Total Customer Count Fail'),

  GET_ACTIVE_CUSTOMER_COUNT: type('[CustomerLayout] Get Active Customer Count'),
  GET_ACTIVE_CUSTOMER_COUNT_SUCCESS: type('[CustomerLayout] Get Active Customer Count Success'),
  GET_ACTIVE_CUSTOMER_COUNT_FAIL: type('[CustomerLayout] Get Active Customer Count Fail'),

  GET_INACTIVE_CUSTOMER_COUNT: type('[CustomerLayout] Get In Active Customer Count'),
  GET_INACTIVE_CUSTOMER_COUNT_SUCCESS: type('[CustomerLayout] Get In Active Customer Count Success'),
  GET_INACTIVE_CUSTOMER_COUNT_FAIL: type('[CustomerLayout] Get In Active Customer Count Fail'),

};

/* Total Customer Count Actions */

export class GetTotalCustomerCountAction implements Action {
  type = ActionTypes.GET_TOTAL_CUSTOMER_COUNT;

  constructor(public payload: any) {
    console.log('action', this.payload);
  }
}

export class GetTotalCustomerCountSuccessAction implements Action {
  type = ActionTypes.GET_TOTAL_CUSTOMER_COUNT_SUCCESS;

  constructor(public payload: any) {
    console.log('action', this.payload);
  }
}
export class GetTotalCustomerCountFailAction implements Action {
  type = ActionTypes.GET_TOTAL_CUSTOMER_COUNT_FAIL;

  constructor(public payload: any = null) {

    // console.log(payload);
  }
}

/* Total Active Customer Count Actions */

export class GetActiveCustomerCountAction implements Action {
  type = ActionTypes.GET_ACTIVE_CUSTOMER_COUNT;

  constructor(public payload: any) {
    console.log('action', this.payload);
  }
}

export class GetActiveCustomerCountSuccessAction implements Action {
  type = ActionTypes.GET_ACTIVE_CUSTOMER_COUNT_SUCCESS;

  constructor(public payload: any) {
    console.log('action', this.payload);
  }
}
export class GetActiveCustomerCountFailAction implements Action {
  type = ActionTypes.GET_ACTIVE_CUSTOMER_COUNT_FAIL;

  constructor(public payload: any = null) {

    // console.log(payload);
  }
}

/* Total InActive Customer Count Actions */

export class GetInActiveCustomerCountAction implements Action {
  type = ActionTypes.GET_INACTIVE_CUSTOMER_COUNT;

  constructor(public payload: any) {
    console.log('action', this.payload);
  }
}

export class GetInActiveCustomerCountSuccessAction implements Action {
  type = ActionTypes.GET_INACTIVE_CUSTOMER_COUNT_SUCCESS;

  constructor(public payload: any) {
    console.log('action', this.payload);
  }
}
export class GetInActiveCustomerCountFailAction implements Action {
  type = ActionTypes.GET_INACTIVE_CUSTOMER_COUNT_FAIL;

  constructor(public payload: any = null) {

    // console.log(payload);
  }
}



export type Actions
  = GetTotalCustomerCountAction
  | GetTotalCustomerCountSuccessAction
  | GetTotalCustomerCountFailAction
  | GetActiveCustomerCountAction
  | GetActiveCustomerCountSuccessAction
  | GetActiveCustomerCountFailAction
  | GetInActiveCustomerCountAction
  | GetInActiveCustomerCountSuccessAction
  | GetInActiveCustomerCountFailAction;

