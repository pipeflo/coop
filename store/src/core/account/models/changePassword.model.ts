/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class ChangePasswordModel {
    public oldPassword: any;
    public newPassword: any;

    constructor(loginRequest: any) {
        this.oldPassword = loginRequest.currentPassword || '';
        this.newPassword = loginRequest.newPassword || '';
    }
}
