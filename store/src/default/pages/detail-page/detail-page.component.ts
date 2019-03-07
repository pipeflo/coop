/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListsSandbox} from '../../../core/lists/lists.sandbox';

@Component({
    selector: 'app-page-detail',
    templateUrl: './detail-page.component.html',
    styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
    private pageId: any;

    constructor(public router: Router, public activatedRoute: ActivatedRoute, public listSandbox: ListsSandbox) {
        // subscribe route params and assign id to pageId
        this.activatedRoute.params.subscribe(param => {
            this.pageId = param['id'];
            this.getPageDetails(this.pageId);
        });
    }

    ngOnInit() {
    }

    getPageDetails(id) {
        this.listSandbox.getPageDetail(id);
    }
}
