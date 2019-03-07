/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import {createSelector} from 'reselect';
import * as fromEditprofile from './editprofile.reducer';
import {AppState} from "../../../../app.state.interface";
// *************************** PUBLIC API's ****************************
/**
 * Auth store functions
 */
export const getChangePswState = (state: AppState) => state.editprofile;

export const getEditProfile = createSelector(getChangePswState, fromEditprofile.geteditprofile);
export const getEditProfileResponse = createSelector(getChangePswState, fromEditprofile.geteditprofileResponse);
export const getEditProfileRequestLoading = createSelector(getChangePswState, fromEditprofile.geteditprofileRequestLoading);
export const getEditProfileRequestLoaded = createSelector(getChangePswState, fromEditprofile.geteditprofileRequestLoaded);
export const getEditProfileRequestFailed = createSelector(getChangePswState, fromEditprofile.geteditprofileRequestFailed);
