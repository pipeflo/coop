/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, OnInit, ViewChild, HostListener} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {CommonSandbox} from "../../../core/common/common.sandbox";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    @ViewChild('sidenav') sidenav: any;
    public sidenavOpen: boolean = true;
    public links = [
        {name: 'Account Dashboard', href: 'dashboard', icon: 'dashboard'},
        {name: 'Account Information', href: 'information', icon: 'info'},
        {name: 'Order History', href: 'orders', icon: 'add_shopping_cart'},
        {name: 'Logout', href: '/sign-in', icon: 'power_settings_new' },
    ];

    constructor(public router: Router, public commonSandbox: CommonSandbox) {
    }

    ngOnInit() {
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
    }
    doLogOut(name) {
        if (name === 'Logout') {
            console.log('logout');
            localStorage.clear();
            this.commonSandbox.doSignout();
        }
    }
    @HostListener('window:resize')
    public onWindowResize(): void {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    }

    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (window.innerWidth < 960) {
                    this.sidenav.close();
                }
            }
        });
    }

}
