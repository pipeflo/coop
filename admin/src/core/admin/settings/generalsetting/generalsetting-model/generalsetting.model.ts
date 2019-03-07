/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class GeneralSettingForm {


    public storeName: string;
    public storeOwner: string;
    public storeAddress: string;
    public storeEmail: string;
    public storeTelephone: string;
    public countryId: number;
    public zoneId: number;
    public storeLanguageName: string;
    public storeCurrencyId: number;
    public storeLogo: string;


    constructor(generalsettingForm: any) {
        this.storeName = generalsettingForm.storename || '';
        this.storeOwner = generalsettingForm.storeowner || '';
        this.storeAddress = generalsettingForm.address || '';
        this.storeEmail = generalsettingForm.email || '';
        this.storeTelephone = generalsettingForm.phonenumber || '';
        this.countryId = generalsettingForm.country || 0;
        this.zoneId = generalsettingForm.zone || 0;
        this.storeLanguageName = generalsettingForm.language || '';
        this.storeCurrencyId = generalsettingForm.currency || 0;
        this.storeLogo = generalsettingForm.image || '';


    }
}
