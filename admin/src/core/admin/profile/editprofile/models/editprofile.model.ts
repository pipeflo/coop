/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class EditprofileForm {


  public username: string;
  public phoneNumber: string;
  public email: string;
  public address: string;
  public avatar: string;




  constructor(editprofileForm: any) {
      console.log('form',editprofileForm );
    this.username = editprofileForm.username || '';
    this.phoneNumber = editprofileForm.phoneNumber || '';
    this.email = editprofileForm.email || '';
    this.address = editprofileForm.address || '';
    if(editprofileForm.avatar) {
        this.avatar = editprofileForm.avatar || '';
    }
  }
}
