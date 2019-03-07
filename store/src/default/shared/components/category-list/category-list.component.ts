/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, Input, Output, EventEmitter, DoCheck} from '@angular/core';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements DoCheck {

    @Input() categories;
    @Input() categoryParentId;
    @Output() change: EventEmitter<any> = new EventEmitter();
    mainCategories;
    @Input() isClicked = [];

    constructor() {
    }

    public ngDoCheck() {
        if (this.categories && !this.mainCategories) {
            this.mainCategories = this.categories.filter(category => category.parentId === this.categoryParentId);
        }
    }

    public stopClickPropagate(event: any) {
        if (window.innerWidth < 960) {
            event.stopPropagation();
            event.preventDefault();
        }
    }

    public changeCategory(id) {
        this.change.emit(id);
    }

}