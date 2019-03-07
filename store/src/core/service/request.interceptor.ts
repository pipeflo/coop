/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Injectable} from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpResponse
} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {NgxSpinnerService} from 'ngx-spinner';
import {TranslateService} from '@ngx-translate/core';
import {ConfigService} from './config.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    protected userTokenDetail: any = {};
    constructor(private router: Router, public snackBar: MatSnackBar,
                private spinner: NgxSpinnerService, public translateService: TranslateService,
                public configService: ConfigService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // this.spinner.show();

        this.userTokenDetail = localStorage.getItem('userToken');
        if (this.userTokenDetail) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + this.userTokenDetail
                }
            });
        }
        console.log(req);

        return next.handle(req).pipe(
            map((user: any) => {
                console.log(user);
                if (user instanceof HttpResponse) {
                    const response = user.body;
                    if (response.message && response.message !== '' && req.method !== 'GET') {
                        this.showSuccess(user.body.message);
                    }
                    console.log(user.body);
                }
                return user;
            }),
            catchError(response => {
                this.spinner.hide();
                console.log(response.status);
                if (response.status === 200 || response.status === 201) {
                    console.log('response status', response.status);
                    return response;
                }
                switch (response.status) {
                    case 400:
                        console.log('case', response)
                        this.handleBadRequest(response);
                        break;
                    case 403:
                        console.log('case', response);
                        this.handleUnAuthorized();
                        break;
                    default:
                        break;
                }
                return throwError(response);
            })
        );

    }


    /**
     * Shows notification errors when server response status is 401
     *
     * @param error
     */
    private handleBadRequest(responseBody: any): void {
        if (responseBody.error) {
            try {
                const bodyParsed = responseBody.error;
                console.log(bodyParsed);
                this.handleErrorMessages(bodyParsed);
            } catch (error) {
                console.log(error);
                // this.handleServerError();
            }
        }
        // else this.handleServerError();
    }

    private handleErrorMessages(response: any): void {
        if (!response) return;
        this.showNotificationError(response.message);
    }

    /**
     * redirect to login if un authorized
     *
     */
    private handleUnAuthorized() {
        localStorage.clear();
    }

    /**
     * Shows error notification with given title and message
     *
     * @param title
     * @param message
     */
    private showNotificationError(message: string): void {
        this.snackBar.open(message, '×', {panelClass: 'error', verticalPosition: 'bottom', duration: 3000});
    }

    private showSuccess(message) {
        console.log('success', message);
        this.snackBar.open(message, '×', {panelClass: 'success', verticalPosition: 'bottom', duration: 3000});
    }
}
