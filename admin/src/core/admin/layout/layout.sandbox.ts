/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as store from '../../app.state.interface';
import {getLoginSuccessResponse} from '../auth/reducer/selectors';
import {TranslateService} from '@ngx-translate/core';
import {LoginResponseModel} from '../auth/models/login.response.model';

@Injectable()
export class LayoutSandbox {

    public user$ = this.appState$.select(getLoginSuccessResponse);

    constructor(protected appState$: Store<store.AppState>,
                private translateService: TranslateService,
                private router: Router) {
        this.translateService.use('en');
    }

    public selectLanguage(lang: any): void {
        this.translateService.use(lang.code);
    }


    public logOut() {
        const userResponse: LoginResponseModel = new LoginResponseModel({});
        userResponse.remove();
        this.router.navigate(['/auth/login']);
    }

}
