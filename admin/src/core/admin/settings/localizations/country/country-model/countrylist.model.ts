/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class CountryListForm {


    public limit: number;
    public offset: number;
    public keyword: string;
    public sortOrder: string;
    public count: number;

    constructor(countrylistForm: any)
    {
      console.log('countryform', countrylistForm);
        this.limit = countrylistForm.limit || 0;
        this.offset = countrylistForm.offset || 0;
        this.keyword = countrylistForm.keyword || '';
        this.count = countrylistForm.count || 0;

    }
}
