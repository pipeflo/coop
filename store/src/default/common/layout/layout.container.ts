/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, OnInit, HostListener, ViewChild, AfterViewInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Settings, AppSettings} from '../../app.settings';
import {SidenavMenuService} from "../../shared/components/sidenav-menu/sidenav-menu.service";
import {ListsSandbox} from "../../../core/lists/lists.sandbox";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.container.html',
    styleUrls: ['./layout.container.scss'],
    providers: [SidenavMenuService]
})
export class LayoutContainer implements OnInit, AfterViewInit {
    public showBackToTop: boolean = false;
    @ViewChild('sidenav') sidenav: any;
    public settings: Settings;

    constructor(public appSettings: AppSettings,
                public sidenavMenuService: SidenavMenuService,
                public router: Router, public listSandBox: ListsSandbox) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.getCategories();
    }
    /**
     * fetch cahegory list from the ListsSandbox. Calls sandbox getCategoryList.
     *
     * @param limit number of records should load
     * @param offset start key for the record
     * @param keyword keyword search from the category list
     * @param sortOrder filter based on sort order
     */
    public getCategories() {
        let params: any = {};
        params.limit = '';
        params.offset = 0;
        params.keyword = '';
        params.sortOrder = '';
        this.listSandBox.getCategoryList(params);
    }
    // to change the theme. select the theme from settings service
    public changeTheme(theme) {
        this.settings.theme = theme;
    }

    // scroll the window to the top
    public scrollToTop() {
        var scrollDuration = 200;
        var scrollStep = -window.pageYOffset / (scrollDuration / 20);
        var scrollInterval = setInterval(() => {
            if (window.pageYOffset != 0) {
                window.scrollBy(0, scrollStep);
            }
            else {
                clearInterval(scrollInterval);
            }
        }, 10);
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                window.scrollTo(0, 0)
            });
        }
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll($event) {
        ($event.target.documentElement.scrollTop > 300) ? this.showBackToTop = true : this.showBackToTop = false;
    }

    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.sidenav.close();
            }
        });
        this.sidenavMenuService.expandActiveSubMenu(this.sidenavMenuService.getSidenavMenuItems());
    }


}