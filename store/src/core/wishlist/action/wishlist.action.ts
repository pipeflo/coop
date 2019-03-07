/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Action} from '@ngrx/store';
import {type} from '../../shared/utility/utilityHelpers';

export const ActionTypes = {
    get_wishlist: type('[wishlist] get wishlist'),
    get_wishlist_SUCCESS: type('[wishlist] get wishlist success'),
    get_wishlist_FAIL: type('[wishlist] get wishlist fail'),
    delete_product: type('[wishlist] delete product'),
    delete_product_SUCCESS: type('[wishlist] delete product success'),
    delete_product_FAIL: type('[wishlist] delete product fail'),
};
/* get wish list action*/

export class getWishlist implements Action {
    type = ActionTypes.get_wishlist;

    constructor(public payload: any) {
    }
}

export class getWishlistSuccess implements Action {
    type = ActionTypes.get_wishlist_SUCCESS;

    constructor(public payload: any) {
    }
}
export class getWishlistFail implements Action {
    type = ActionTypes.get_wishlist_FAIL;

    constructor(public payload: any) {
    }
}
/* delete product from wish list action*/

export class deleteProduct implements Action {
    type = ActionTypes.delete_product;

    constructor(public payload: any) {
    }
}

export class deleteProductSuccess implements Action {
    type = ActionTypes.delete_product_SUCCESS;

    constructor(public payload: any) {
    }
}
export class deleteProductFail implements Action {
    type = ActionTypes.delete_product_FAIL;

    constructor(public payload: any) {
    }
}




export type Actions
    = getWishlist|
    getWishlistSuccess|
    getWishlistFail|
    deleteProduct|
    deleteProductSuccess|
    deleteProductFail;
