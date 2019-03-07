/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class UserForm {


  public firstName: String;
  public lastName:String;
  public email:String;
  public userGroupId: number;
  public username: String;
  public password: String;
  public id: number;


  constructor(userForm: any) {
    console.log(userForm);
    this.firstName = userForm.firstName || '';
    this.lastName = userForm.lastName || '';
    this.email = userForm.email || '';
    this.userGroupId = userForm.role || 0;
    this.username = userForm.username || '';
    this.password = userForm.password || '';
    if (userForm.userID) {
      this.id = userForm.userID || '';
    }

  }
}
