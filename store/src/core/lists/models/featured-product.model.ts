/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class FeaturedProductModel {
    public limit: number;
    public offset: number;
    public keyword: string;
    public sku: string;
    public count: boolean;

    constructor(featuredRequest: any) {
        this.limit = featuredRequest.limit || 0;
        this.offset = featuredRequest.offset || 0;
        this.keyword = featuredRequest.keyword || '';
        this.sku = featuredRequest.sku || '';
        this.count = featuredRequest.count || false;
    }
}
