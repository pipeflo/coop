/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import {Action} from '@ngrx/store';
import {type} from './../../../../shared/utility/utilityHelpers';
import {OrderstatusForm} from '../orderstatus.models/orderstatus.model';
import {OrderStatusListForm} from '../orderstatus.models/orderstatuslist.model';
import {OrderStatusCountModel} from '../orderstatus.models/OrderStatusCount.model';

export const ActionTypes = {

    DO_ORDERSTATUS_LIST_ACTION: type('[ORDERSTATUSList] Do ORDERSTATUS'),
    DO_ORDERSTATUS__LIST_SUCCESS: type('[ORDERSTATUSList] Do ORDERSTATUS Success'),
    DO_ORDERSTATUS__LIST_FAIL: type('[ORDERSTATUSList] Do ORDERSTATUS Fail'),

    DO_ORDERSTATUS_COUNT_ACTION: type('[Common] Do ORDER status Paination Count'),
    DO_ORDERSTATUS_COUNT_SUCCESS: type('[Common] Doorder status Paination Count Success'),
    DO_ORDERSTATUS_COUNT_FAIL: type('[Common] Do order status Paination Count Fail'),

    DO_NEWORDERSTATUS: type('[Settings] Do NEWORDERSTATUS'),
    DO_NEWORDERSTATUS_SUCCESS: type('[Settings] NEWORDERSTATUS Success'),
    DO_NEWORDERSTATUS_FAIL: type('[Settings] NEWORDERSTATUS Fail'),

    DO_UpdateOrderstatus: type('[Settings] DO_UpdateOrderstatus'),
    DO_UpdateOrderstatus_SUCCESS: type('[Settings] DO_UpdateOrderstatus Success'),
    DO_UpdateOrderstatus_FAIL: type('[Settings] DO_UpdateOrderstatus_FAIL '),

    DO_ORDERSTATUS_DELETE: type('[Delete] Do order status Delete'),
    DO_ORDERSTATUS_DELETE_SUCCESS: type('[Delete] Do order status Success'),
    DO_ORDERSTATUS_DELETE_FAIL: type('[Delete] Do order status Delete Fail')
};

// #  Order Status list pagesaction

export class DoOrderStatusListAction implements Action {
    type = ActionTypes.DO_ORDERSTATUS_LIST_ACTION;

    constructor(public payload: OrderStatusListForm) {
        console.log(' OrderStatus pagesaction', this.payload);
    }
}

export class DoOrderStatusSuccessAction implements Action {
    type = ActionTypes.DO_ORDERSTATUS__LIST_SUCCESS;

    constructor(public payload: any) {
        console.log(' OrderStatus success', this.payload);

    }
}

export class DoOrderStatusListFailAction implements Action {
    type = ActionTypes.DO_ORDERSTATUS__LIST_FAIL;

    constructor(public payload: any = null) {
        console.log(' OrderStatus fail', this.payload);
    }
}


// Pagination
export class DopaginationorderstatusListAction implements Action {
    type = ActionTypes.DO_ORDERSTATUS_COUNT_ACTION;

    constructor(public payload: OrderStatusCountModel) {
        console.log(' action count', this.payload);
    }
}

export class DopaginationorderstatusSuccessAction implements Action {
    type = ActionTypes.DO_ORDERSTATUS_COUNT_SUCCESS;

    constructor(public payload: any) {
        console.log('success', this.payload);

    }
}

export class DopaginationorderstatusFailAction implements Action {
    type = ActionTypes.DO_ORDERSTATUS_COUNT_FAIL;

    constructor(public payload: any = null) {
        console.log(' fail', this.payload);
    }
}

// # add  Order Status

export class DoNewOrderStatusAction implements Action {
    type = ActionTypes.DO_NEWORDERSTATUS;

    constructor(public payload: OrderstatusForm) {
        console.log('NewOrderStatus pagesaction', this.payload);
    }
}

export class DoNewOrderStatusSuccessAction implements Action {
    type = ActionTypes.DO_NEWORDERSTATUS_SUCCESS;

    constructor(public payload: any) {
        console.log('NewOrderStatus sucess update', this.payload);

    }
}

export class DoNewOrderStatusFailAction implements Action {
    type = ActionTypes.DO_NEWORDERSTATUS_FAIL;

    constructor(public payload: any = null) {
        console.log('NewOrderStatus fail update', this.payload);
    }
}

// / # Update  Order Status

export class DoUpdateOrderstatusAction implements Action {
    type = ActionTypes.DO_UpdateOrderstatus;

    constructor(public payload: OrderstatusForm) {
        console.log('Update OrderStatus pagesaction', this.payload);
    }
}

export class DoUpdateOrderstatusSuccessAction implements Action {
    type = ActionTypes.DO_UpdateOrderstatus_SUCCESS;

    constructor(public payload: any) {
        console.log('Update OrderStatus sucess update', this.payload);

    }
}

export class DoUpdateOrderstatusFailAction implements Action {
    type = ActionTypes.DO_UpdateOrderstatus_FAIL;

    constructor(public payload: any = null) {
        console.log('Update OrderStatus fail update', this.payload);
    }
}

// # delete
export class DoOrderStatusDeleteAction implements Action {
    type = ActionTypes.DO_ORDERSTATUS_DELETE;

    constructor(public payload: any) {
        console.log('action', this.payload);
    }
}

export class DoOrderStatusDeleteSuccessAction implements Action {
    type = ActionTypes.DO_ORDERSTATUS_DELETE_SUCCESS;

    constructor(public payload: any) {
    }
}

export class DoOrderStatusDeleteFailAction implements Action {
    type = ActionTypes.DO_ORDERSTATUS_DELETE_FAIL;

    constructor(public payload: any = null) {
        // console.log(payload);
    }
}


export type Actions =
    | DoOrderStatusListAction
    | DoOrderStatusSuccessAction
    | DoOrderStatusListFailAction
    | DopaginationorderstatusListAction
    | DopaginationorderstatusSuccessAction
    | DopaginationorderstatusFailAction
    | DoNewOrderStatusAction
    | DoNewOrderStatusSuccessAction
    | DoNewOrderStatusFailAction
    | DoUpdateOrderstatusSuccessAction
    | DoUpdateOrderstatusAction
    | DoUpdateOrderstatusFailAction
    | DoOrderStatusDeleteAction
    | DoOrderStatusDeleteSuccessAction
    | DoOrderStatusDeleteFailAction;
