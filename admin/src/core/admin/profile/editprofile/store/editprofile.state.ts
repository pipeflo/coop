/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import {Map, Record} from 'immutable';


export interface EditprofileState extends Map<string, any> {

    editprofile: any;
    editprofileResponse: boolean;
    editprofileRequestLoading: boolean;
    editprofileRequestLoaded: boolean;
    editprofileRequestFailed: boolean;


}

export const EditprofileRecordState = Record({

    editprofile: [],
    editprofileResponse: false,
    editprofileRequestLoading: false,
    editprofileRequestLoaded: false,
    editprofileRequestFailed: false,

});
