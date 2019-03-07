/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

export class CategorylistForm  {


    public limit: number;
    public offset: number;
    public keyword: string;
    public sortOrder: string;




    constructor(categorylistForm: any)
    {
      console.log('cate list', categorylistForm);
        this.limit = categorylistForm.limit || '';
        this.offset = categorylistForm.offset || '';
        this.keyword = categorylistForm.keyword || '';
        this.sortOrder = categorylistForm.sortOrder || '';


    }
}
