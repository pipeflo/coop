/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class ChangePasswordForm {


  public oldPassword: String;
  public newPassword: String;



  constructor(changePasswordForm: any) {
      console.log('form',changePasswordForm );
    this.oldPassword = changePasswordForm.oldpsw || '';
    this.newPassword = changePasswordForm.newpsw || '';
  }
}
