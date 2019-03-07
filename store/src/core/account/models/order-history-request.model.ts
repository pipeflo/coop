/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class OrderHistoryRequestModel {
    public limit: any;
    public offset: any;
    public count: number;

    constructor(historyRequest: any) {
        this.limit = historyRequest.limit || '';
        this.offset = historyRequest.offset || '';
        this.count = historyRequest.count || 0;
    }
}
