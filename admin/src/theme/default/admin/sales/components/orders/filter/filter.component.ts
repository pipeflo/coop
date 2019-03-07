/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import {Component, OnInit,EventEmitter,Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OrdersSandbox} from '../../../../../../../core/admin/sales/orders/orders-sandbox';


@Component({
    selector: 'app-sales-order-filter',
    templateUrl: 'filter.component.html',
    styleUrls: ['./filter.component.scss'],
})

export class OrderFilterComponent implements OnInit {

    public pageSize: any = 5;

    public salesOrder: FormGroup;
    public submitted = false;
    public name: FormControl;
    public total: FormControl;
    public date: FormControl;
    public status: FormControl;
    public orderId: FormControl;
    public offset: any = 0;
    public pagination = 1;
    @Output() salesEmit = new EventEmitter<string>();

    constructor(public fb: FormBuilder, public appSandbox: OrdersSandbox) {

    }

    ngOnInit() {
        this.initForm();
        this.getOrderList(this.offset, this.pageSize);
    }

    initForm() {

        this.name = new FormControl('', [Validators.required]);
        this.total = new FormControl('', [Validators.required]);
        this.date = new FormControl('', [Validators.required]);
        this.status = new FormControl('', [Validators.required]);
        this.orderId = new FormControl('', [Validators.required]);
        this.salesOrder = this.fb.group({
            name: this.name, date: this.date,
            orderId: this.orderId, status: this.status, total: this.total
        });

    }

    onSubmit() {
        let params: any = {};
        params.limit = this.pageSize;
        params.offset = this.offset;
        params.orderId = this.salesOrder.value.orderId;
        params.customerName = this.salesOrder.value.name;
        params.totalAmount = this.salesOrder.value.total;
        params.dateAdded = this.salesOrder.value.date;
        this.salesEmit.emit(params);
        this.appSandbox.getOrderList(params);
        // if (this.pagination) {
            params.count = 1;
            console.log('count pag', params);
            this.appSandbox.getOrderPagination(params);
        // }
    }

    getOrderList(offset: number = 0, page) {
        let param: any = {};
        param.limit = page;
        param.offset = this.offset;
        param.orderId = '';
        param.customerName = '';
        param.totalAmount = '';
        param.dateAdded = '';
        this.appSandbox.getOrderList(param);
        if (this.pagination) {
            console.log('pagination', this.pagination);
            param.count = 1;
            this.appSandbox.getOrderPagination(param);
        }
    }

    reset() {
        this.salesOrder.reset();
        let param: any = {};
        param.limit =5;
        param.offset = '';
        param.orderId = '';
        param.customerName = '';
        param.totalAmount = '';
        param.dateAdded = '';
        this.salesEmit.emit(param);
        this.appSandbox.getOrderList(param);

    }


}
