/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import {AppState} from '../../../app.state.interface';
import {createSelector} from 'reselect';
import * as fromCommon from './common.reducer';

// *************************** PUBLIC API's ****************************
/**
 * Auth store functions
 */
export const getCommonState = (state: AppState) => state.common;
export const getlogOut = createSelector(getCommonState, fromCommon.getlogout);
