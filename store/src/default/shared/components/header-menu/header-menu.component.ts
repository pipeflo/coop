/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component, OnInit, Input } from '@angular/core';
import {SidenavMenuService} from '../sidenav-menu/sidenav-menu.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-spurt-header-menu',
    templateUrl: './header-menu.component.html',
    styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {
    public category = {'name': 'Select Category'};
    @Input() categories: any;

    searchValue: any = '';
    constructor(public sidenavMenuService: SidenavMenuService, public router: Router, public formBuilder: FormBuilder) { }

    ngOnInit() {

    }
    public search() {
        this.router.navigate(['/products/', {'keyword': this.searchValue} ]);
    }
    public searchData(value) {
        this.searchValue = value;
        console.log('search....', value);
        this.router.navigate(['/products/',  {'keyword': this.searchValue }]);
    }
    public changeCategory(event) {
        if (event) {
            console.log('event', event);
            this.router.navigate(['/products/', event]);
        }
        if (window.innerWidth < 960) {
            this.stopClickPropagate(event);
        }
    }
    public stopClickPropagate(event: any){
        event.stopPropagation();
        event.preventDefault();
    }
    public closeSubMenus() {
        if ( window.innerWidth < 960 ) {
            this.sidenavMenuService.closeAllSubMenus();
        }
    }
}
