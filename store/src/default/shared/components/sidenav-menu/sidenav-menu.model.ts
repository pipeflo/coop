/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class SidenavMenu {
    constructor(public id: number,
                public title: string,
                public routerLink: string,
                public href: string,
                public target: string,
                public hasSubMenu: boolean,
                public parentId: number) { }
} 