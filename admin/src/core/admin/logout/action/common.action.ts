/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import {type} from '../utility';
import {Action} from '@ngrx/store';


export const ActionTypes = {

  DO_LOGOUT: type('[Common] Do Logout'),
  DO_LOGOUT_SUCCESS: type('[Common] Do Logout Success'),
  DO_LOGOUT_FAIL: type('[Common] Do Logout Fail'),
  DO_CLEAR: type('[Common] Do Clear'),
  DO_CLEAR_SUCCESS: type('[Common] Do Clear Success'),
  DO_CLEAR_FAIL: type('[Common] Do Clear Fail'),

}

// LOGOUT

export class DoLogoutAction implements Action {
  type = ActionTypes.DO_LOGOUT;

  constructor(public payload=null) {
    console.log('action', this.payload);
  }
}

export class DoLogoutSuccessAction implements Action {
  type = ActionTypes.DO_LOGOUT_SUCCESS;

  constructor(public payload: any) {
  }
}
export class DoLogoutFailAction implements Action {
  type = ActionTypes.DO_LOGOUT_FAIL;

  constructor(public payload: any = null) {
    // console.log(payload);
  }
}




export class DoClearAction implements Action {
  type = ActionTypes.DO_CLEAR;

  constructor(public payload=null) {
    console.log('action', this.payload);
  }
}

export class DoClearSuccessAction implements Action {
  type = ActionTypes.DO_CLEAR_SUCCESS;

  constructor(public payload: any) {
  }
}
export class DoClearFailAction implements Action {
  type = ActionTypes.DO_CLEAR_FAIL;

  constructor(public payload: any = null) {
    // console.log(payload);
  }
}



export type Actions
    = DoLogoutAction
    |DoLogoutSuccessAction
    |DoLogoutFailAction
  |DoClearAction
  |DoClearSuccessAction
  |DoClearFailAction;
