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
import {Router} from '@angular/router';
import {CategoriesSandbox} from "../../../../../../../core/admin/catalog/category/categories.sandbox";
import {CategoriesService} from "../../../../../../../core/admin/catalog/category/categories.service";


@Component({
    selector: 'app-spurt-catalog-categories-list',
    templateUrl: './list.component.html',

})
export class CategoriesListComponent implements OnInit {

        // pagination
    public page: number;
    private offset: number = 0;
    public pageSize: number = 5;
    private pageSizeOptions = [5, 10, 25, 100];
    private keyword: string = '';
    public index: number;
    private currentPage: number;
    private sortOrder:number;
    // editCategory
    private edit: any;
    // condition for filter component
    public buttonCheck: boolean=false;

    constructor(private categoryService: CategoriesService,
                public categorySandbox: CategoriesSandbox,
                private route: Router) {

        // initially calling sandbox categorylist with empty data
        this.categoryList(0, this.keyword);

    }
            // initially calling categories pagination
    ngOnInit() {
        this.index = 0;
        this.categoriesPagination();
    }


    /**
     * Handles  'categorylist' event. Calls sandbox categorylist function .
     *
     * @param pageSize form pagination
     *  @param offset form offset
     */
    categoryList(offset: number = 0, keyword) {
        let param: any = {};
        param.limit = this.pageSize;
        param.offset = this.offset;
        param.keyword = this.keyword;
        param.sortOrder = this.sortOrder;
        this.categorySandbox.categorylist(param);


    }

    /**
     * Handles  'categorycountdata' event. Calls categorySandbox categorycountdata function .
     *
     * @param pageSize form pagination
     *  @param offset form offset
     */
    categoriesPagination() {
        let param: any = {};
        param.limit = this.pageSize;
        param.offset = this.offset;
        param.keyword = '';
        param.count = 1;
        this.categorySandbox.categorycountdata(param);
    }

    /**
     * Handles  'editCategory' event. Calls categoryService setEditcategories function .
     *  @param data  form value
     */

    editCategory(data) {
        this.edit = data;
        this.categoryService.setEditcategories(this.edit);
        console.log('array list', this.edit);
        this.route.navigate(['/catalog/categories/add']);


    }

    /**
     * Handles  'addCategories' event. Calls categoryService setEditcategories function .
     *  @param edit  with empty value
     */
    addCategories() {
        this.edit = ' ';

        this.categoryService.setEditcategories(this.edit);
        this.route.navigate(['/catalog/categories/add']);
    }

    // shows the filter component
    changeFilter(event) {
        this.buttonCheck = event.target.checked;
    }

    /**
     * Handles  'onPageChange' event. Calls categorylist function .
     *  @param event  from material paginator value
     */

    onPageChange(event: any) {
        this.currentPage = event.offset;
        this.pageSize = event.pageSize;
        this.index = event.pageIndex;
         this.offset = event.pageSize * event.pageIndex;
        this.categoryList(  this.offset, this.pageSize);
    }

    /**
     * Handles  'deleteCategory' event. Calls categorySandbox categorydelete function,
     * (Calls  categorylist function if (_delete)).
     *  @param id  from material paginator value.
     */


    deleteCategory(id) {
        let params: any = {};
        params.categoryId =id;
        this.categorySandbox.categorydelete(params);
        this.categorySandbox.getCategoriesDelete$.subscribe(_delete => {
            if (_delete) {
                if (_delete.user.status == 1) {
                    this.categoryList(this.offset, this.pageSize);
                }
            }
        });
    }
    // receive param from filter component .And calls categoriesPagination event
    receiveProgress(event)
    {
        this.index = 0;
        this.categoriesPagination();
        this.keyword = event.keyword;
        this.sortOrder= event.sortOrder;

    }

}
