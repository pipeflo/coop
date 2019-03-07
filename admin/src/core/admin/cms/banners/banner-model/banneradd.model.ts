/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

export class BanneraddModel {


    public title: string;
    public content: string;
    public image: string;
    public link: string;
    public position: string;

    constructor(bannerForm: any) {

        this.title = bannerForm.title || '';
        this.content = bannerForm.content || '';
        this.image = bannerForm.image || '';
        this.link = bannerForm.link || '';
        this.position = bannerForm.position || '';
    }
}
