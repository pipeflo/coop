/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router, ActivatedRoute} from '@angular/router';
import {Validators, FormGroup, FormControl, FormBuilder, ValidatorFn, AbstractControl} from '@angular/forms';
import {CustomerSandbox} from '../../../../../../../core/admin/Customers/customers/customer.sandbox';
import {CustomersApiClientService} from '../../../../../../../core/admin/Customers/customers/customer.ApiClient.service';
import {patternValidator} from '../../../../../../../core/admin/providers/patternValidator';

@Component({
    selector: 'app-customer-add',
    templateUrl: 'add.component.html',
    encapsulation: ViewEncapsulation.None,
    styles: [
            `
            .dark-modal .modal-content {
                background-color: #009efb;
                color: white;
            }

            .dark-modal .close {
                color: white;
            }

            .light-blue-backdrop {
                background-color: #5cb3fd;
            }

            .image-manager .modal-dialog {
                max-width: 70%;
            }
        `
    ]
})


export class CustomerAddComponent implements OnInit {


    // formgroup variable
    public customerForm: FormGroup;
    public mailStatus: FormControl;
    public customerGroup: FormControl;
    public customerName: FormControl;
    public email: FormControl;
    public telephone: FormControl;
    public password: FormControl;
    public confirmpassword: FormControl;
    public newsletter: FormControl;
    public status: FormControl;
    public safe: FormControl;
    // Variable
    public submitted = false;
    public customerInfo: any = [];
    private serviceEditinfo: any;
    private update_CustId_PSW: boolean;
    private update_CustId_CPSW: boolean;
    private EditCustomerId: any;
    private closeResult: string;


    constructor(private modalService: NgbModal,
                private route: ActivatedRoute,
                private modalService2: NgbModal,
                private router: Router,
                public fb: FormBuilder,
                public appSandbox: CustomerSandbox,
                private service: CustomersApiClientService) {
    }

    // style purpose using
    beforeChange($event: NgbPanelChangeEvent) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }

        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    }

    // style purpose using
    open2(content) {
        this.modalService.open(content, {windowClass: 'image-manager'}).result.then(
            result => {
                this.closeResult = `Closed with: ${result}`;
            },
            reason => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
        );
    }

    // style purpose using
    open(content) {
        this.modalService2.open(content, {windowClass: 'dark-modal,image-manager'});
    }

    // style purpose using
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    // intially calls editcustomerinfo,initForm
    ngOnInit(): void {
        this.EditCustomerId = this.route.snapshot.paramMap.get('id');
        this.update_CustId_PSW = true;
        this.update_CustId_CPSW = true;
        this.submitted = false;

        this.editcustomerinfo();
        if (this.customerInfo && this.customerInfo[0]) {
            console.log('update customerInfo', this.customerInfo);
        } else {
            console.log('add customerInfo', this.customerInfo);

        }
        this.initForm();
    }

    // cancel  form Submit
    addCustCancle() {

        this.router.navigate(['/customers/customer']);
    }

// initial customerform form created
    initForm() {
        this.customerForm = this.fb.group({
                customerGroup: [null, [Validators.required]],
                customerName: [null, [Validators.required]],
                email: ['', Validators.compose([Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), Validators.minLength(5)])],
                telephone: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(11), Validators.pattern('^[a-zA-Z0-9]*$')]],
                password: ['', this.conditionalValidator((() => this.update_CustId_PSW === true), Validators.required)],
                confirmpassword: ['', this.conditionalValidator((() => this.update_CustId_CPSW === true), Validators.required)],
                status: [null, [Validators.required]],
                newsletter: [null, [Validators.required]],
                safe: [null, [Validators.required]],
                mailStatus: [null, [Validators.required]],
            },
            {validator: this.matchingPasswords('password', 'confirmpassword')}
        );

    }

    keyPress(event: any) {
        const pattern = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;

        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }

    /**
     * Handles form 'matchingPasswords' event. for conformation password.
     * @param passwordKey for password value
     * @param passwordConfirmationKey for Repassword value
     */
    matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
        return (group: FormGroup) => {
            const password = group.controls[passwordKey];
            const passwordConfirmation = group.controls[passwordConfirmationKey];
            if (password.value !== passwordConfirmation.value) {
                return passwordConfirmation.setErrors({mismatchedPasswords: true});
            }
        };
    }


    // A function using password validation purpose
    conditionalValidator(condition: (() => boolean), validator: ValidatorFn): ValidatorFn {
        console.log('psw valid');
        return (control: AbstractControl): { [key: string]: any } => {
            if (!condition()) {
                return null;
            }
            return validator(control);
        };
    }

    /**
     * Handles form 'onSubmit' event . Calls sandbox addCustomers(for add customer)function and updateCustomers(for update Customer)
     * @param customerForm entire form value
     * @param params storing entire form value
     */
    onSubmit() {
        this.submitted = true;
        if (this.customerForm.invalid) {
            return;
        }
        let params: any = {};
        params.customerGroupId = 1;
        params.username = this.customerForm.value.customerName;
        params.email = this.customerForm.value.email;
        params.mobileNumber = this.customerForm.value.telephone;
        params.password = this.customerForm.value.password;
        params.confirmPassword = this.customerForm.value.confirmpassword;
        params.mailStatus = this.customerForm.value.mailStatus;
        params.avatar = 'empty';
        params.status = this.customerForm.value.status;
        params.newsletter = this.customerForm.value.newsletter;
        params.safe = this.customerForm.value.safe;

        if (this.customerInfo && this.customerInfo[0].customerGroupId) {
            params.id = this.customerInfo[0].id;
            this.appSandbox.updateCustomers(params);
        } else {
            this.appSandbox.addCustomers(params);
        }

    }

// edit (for updating purpose ) the customerForm
    editcustomerinfo() {
        this.serviceEditinfo = this.service.getcusteditdata();
        if (this.serviceEditinfo) {
            this.customerInfo.push(this.serviceEditinfo);
            this.update_CustId_CPSW = false;
            this.update_CustId_PSW = false;
            console.log(' update customerInfo', this.customerInfo);
        } else {
            console.log('Add customerInfo', this.customerInfo);
        }
        if (this.customerInfo && this.customerInfo[0]) {
            for (let i = 0; i < this.customerInfo.length; i++) {
                if (this.EditCustomerId) {
                    this.customerGroup = this.customerInfo[0].username;
                    this.customerName = this.customerInfo[0].firstName;
                    this.email = this.customerInfo[0].email;
                    this.telephone = this.customerInfo[0].mobileNumber;
                    this.newsletter = this.customerInfo[0].newsletter;
                    this.status = this.customerInfo[0].isActive;
                    this.mailStatus = this.customerInfo[0].isActive;
                    this.safe = this.customerInfo[0].safe;
                }

            }
        } else {
            this.customerInfo = ' ';
        }
    }

// A property 'f' using in valdiation control in template
    get f() {
        return this.customerForm.controls;
    }


}
