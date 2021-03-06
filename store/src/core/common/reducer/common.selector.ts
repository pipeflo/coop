/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {createSelector} from 'reselect';

import * as  fromWishlist from './common.reducer';
import {AppState} from '../../state.interface';

export const getState = (State: AppState) => State.common;
export const wishlistCount = createSelector(getState, fromWishlist.getWishlistCount);
export const getProfile = createSelector(getState, fromWishlist.getProfile);

export const wishlistCountLoading = createSelector(getState, fromWishlist.getWishlistCountLoading);
export const wishlistCountLoaded = createSelector(getState, fromWishlist.getWishlistCountLoaded);
export const wishlistCountFailed = createSelector(getState, fromWishlist.getWishlistCountFailed);

export const profileLoading = createSelector(getState, fromWishlist.getProfileLoading);
export const profileLoaded = createSelector(getState, fromWishlist.getProfileLoaded);
export const profileFailed = createSelector(getState, fromWishlist.getProfileFailed);

