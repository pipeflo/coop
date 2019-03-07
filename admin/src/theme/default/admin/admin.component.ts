/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {TranslateService} from '@ngx-translate/core';
import {HTTPStatus} from '../../../core/admin/providers/CommonInterceptor';

@Component({
    selector: 'app-root',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})

export class DefaultComponent implements OnInit {
    public loader = false;
    public title = 'Spurt Commerce';

    ngOnInit() {
        this.translate.setDefaultLang('en');
    }

    constructor(public updates: SwUpdate,
                public translate: TranslateService,
                private httpStatus: HTTPStatus) {
        // ---

        this.getHttpResponse();
    }

    getHttpResponse() {
        this.httpStatus.getHttpStatus().subscribe((status: boolean) => {
            this.loader = status;
        });
    }
}
