
export class LogoutResponseModel {

  public user: any = {};

  constructor(logoutFormResponse: any) {
    console.log('response', logoutFormResponse);

    this.user = logoutFormResponse|| '';
    // localStorage.setItem('userToken', this.accessToken);

  }

}
