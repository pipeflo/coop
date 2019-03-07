/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

export class LoginForm {
  // Declare Default Params

  public username: String;
  public password: String;
  constructor(loginForm: any) {
    this.username = loginForm.username || '';
    this.password = loginForm.password || '';
  }
}
