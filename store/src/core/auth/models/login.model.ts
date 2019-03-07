/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class loginModel {
    public emailId: any;
    public password: any;

    constructor(loginRequest: any) {
        this.emailId = loginRequest.email || '';
        this.password = loginRequest.password || '';
    }
}
