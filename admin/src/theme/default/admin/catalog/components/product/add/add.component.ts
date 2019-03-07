/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {NgbModal, NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {ImagemanagerpopupComponent} from '../../../../shared/model-popup/ImageManagerPopup/imagemanagerpopup.component';
import {ProductSandbox} from '../../../../../../../core/admin/catalog/product/product.sandbox';
import {CategoriesSandbox} from '../../../../../../../core/admin/catalog/category/categories.sandbox';
import {BrandSandbox} from '../../../../../../../core/admin/catalog/brand/brand.sandbox';
import {ConfigService} from '../../../../../../../core/admin/service/config.service';


@Component({
    selector: 'app-add-products',
    templateUrl: 'add.component.html',
    styleUrls: ['./add.component.scss'],

})
export class ProductAddComponent implements OnInit, OnDestroy {


    // reactive form
    public user: FormGroup;
    public productName: FormControl;
    public metaTagTitle: FormControl;
    public productDescription: FormControl;
    public upc: FormControl;
    public sku: FormControl;
    public model: FormControl;
    public location: FormControl;
    public price: FormControl;
    public minimumQuantity: FormControl;
    public quantity: FormControl;
    public subtractStock: FormControl;
    public outOfStockStatus: FormControl;
    public requiredShipping: FormControl;
    public dateAvailable: FormControl;
    public status: FormControl;
    public sortOrder: FormControl;
    public condition: FormControl;
    // editing values
    public editId: any;
    // pagination
    public catagory: any;
    // selected category list
    public selectedCategories: any = [];
    // upload
    public uploadImage: any = [];
    // selectedCategories data in TotalCategories
    public TotalCategories: any = 0;
    public filteredArray: any[];
    // product add or update api params
    private param: any = {};
    // getting values from popup
    private closeResult: any;
    private getDismissReason: any;
    // condition for product remove
    private show: boolean;
    // condition for product add or update api
    private onetimeEdit: boolean = false;
    private CategoryValue: boolean = false;
    // validation
    public submittedValues: boolean = false;
    // image view
    public imageUrls: string;
    // add categories only when add button clicked
    private addOneTime: boolean = false;
    private subscriptions: Array<Subscription> = [];

    constructor(public fb: FormBuilder,
                private productSandbox: ProductSandbox,
                private categoriessandbox: CategoriesSandbox,
                public brandsandbox: BrandSandbox,
                private popup: NgbModal,
                private route: ActivatedRoute,
                private changeDetectRef: ChangeDetectorRef,
                public configService: ConfigService) {
        this.getCategoryList();
        this.getManufacturerList();
        this.route.params.subscribe(data => {
            if (data) {
                this.editId = data['id'];
            }
        });


    }

    beforeChange($event: NgbPanelChangeEvent) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }

        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    }

    ngOnInit() {
        // calling ProductDetail
        this.initProductForm();
        if (this.editId) {
            this.productSandbox.getProductDetail({Id: this.editId});
            this.regDetailEvent();
        }
        this.imageUrls = this.configService.get('resize').imageUrl;
        this.changeDetectRef.detectChanges();

    }

    // reactive form
    initProductForm() {
        this.productName = new FormControl('', [Validators.required]);
        this.metaTagTitle = new FormControl('', [Validators.required]);
        this.productDescription = new FormControl('', [Validators.required]);
        this.upc = new FormControl('', [Validators.required]);
        this.sku = new FormControl('', [Validators.required]);
        this.model = new FormControl('', [Validators.required]);
        this.location = new FormControl('', [Validators.required]);
        this.price = new FormControl('', [Validators.required]);
        this.minimumQuantity = new FormControl('', [Validators.required]);
        this.quantity = new FormControl('', [Validators.required]);
        this.subtractStock = new FormControl('', [Validators.required]);
        this.outOfStockStatus = new FormControl('', [Validators.required]);
        this.requiredShipping = new FormControl('', [Validators.required]);
        this.dateAvailable = new FormControl('', [Validators.required]);
        this.status = new FormControl('', [Validators.required]);
        this.sortOrder = new FormControl('', [Validators.required]);
        this.condition = new FormControl('', [Validators.required]);

        this.user = this.fb.group({
            productName: this.productName,
            metaTagTitle: this.metaTagTitle,
            productDescription: this.productDescription,
            upc: this.upc,
            sku: this.sku,
            model: this.model,
            location: this.location,
            price: this.price,
            minimumQuantity: this.minimumQuantity,
            quantity: this.quantity,
            subtractStock: this.subtractStock,
            outOfStockStatus: this.outOfStockStatus,
            requiredShipping: this.requiredShipping,
            dateAvailable: this.dateAvailable,
            status: this.status,
            sortOrder: this.sortOrder,
            condition: this.condition,

        });
    }


    /**
     * unsubscribe the subscriptions
     *
     * Handles  'regDetailEvent' event. Calls productSandbox productDetails$ to
     * subscribe the response data.,then calls editProductForm function with the response data.
     *
     */
    regDetailEvent() {
        this.CategoryValue = true;
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
        this.subscriptions.push(this.productSandbox.productDetails$.subscribe(data => {
            if (data && data[0]) {
                this.editProductForm(data[0]);

            }
        }));


    }

    // Handles form 'getManufacturerList' event. Calls sandbox manufacturerList function with empty value.

    getManufacturerList() {
        let params: any = {};
        params.limit = '';
        params.offset = '';
        params.keyword = '';
        params.count = '';
        this.brandsandbox.manufacturerList(params);

    }

    // calling category list api with pagination
    getCategoryList() {
        let param: any = {};
        param.limit = '';
        param.offset = '';
        param.keyword = this.catagory;
        param.sortOrder = '';
        this.categoriessandbox.categorylist(param);
    }

    /**
     * Handles  'searchCategory' event. Calls sandbox getCategoryList function.

     * @param catagory searchCategory input value
     */
    searchCategory(event) {
        this.catagory = event.target.value;
        this.getCategoryList();
    }

    /**
     * Handles  'selectCategory' event. Calls categoriessandbox Productremove  if (this.editId)function.
     * else Calls categoriessandbox Productremove.And push  the datas to categories list using push() method.
     * @param categoryId searchCategory input value
     * @param name searchCategory input value
     */
    selectCategory(data, i) {
        if (this.editId) {
            let param: any = {};
            param.categoryId = data.categoryId;
            param.categoryName = data.name;
            this.addOneTime=true;
            this.selectedCategories.push(param);
            this.categoriessandbox.Productremove(i);
        } else {
            this.selectedCategories.push(data);
            this.categoriessandbox.Productremove(i);
            this.show = false;
        }
        this.filteredArray = this.selectedCategories;
    }


    /**
     * Handles  'removeCategory' event. Calls categoriessandbox Productadd  if (this.editId)function.
     * else Calls categoriessandbox Productadd.And splice the datas with particular index as(i)
     * @param categoryId searchCategory input value
     * @param name searchCategory input value
     */
    removeCategory(data, i) {
        if (this.editId) {
            let param: any = {};
            param.categoryId = data.categoryId;
            param.name = data.categoryName;
            this.addOneTime = true;
            this.categoriessandbox.Productadd(param);
            this.selectedCategories.splice(i, 1);
        } else {
            this.categoriessandbox.Productadd(data);
            this.selectedCategories.splice(i, 1);
        }
        this.filteredArray = this.selectedCategories;

    }


    /**
     * Handles  'addSelecctedCategories' event.
     *
     * storing selectedCategories data in TotalCategories
     */

    addSelecctedCategories() {


        if (this.show == true) {
            this.selectedCategories = this.filteredArray;

        }
        for (let i = 0; i < this.selectedCategories.length; i++) {
            let val = this.selectedCategories.length;
            if (this.selectedCategories[i] != val) {
                this.TotalCategories = this.TotalCategories + this.selectedCategories[i].categoryId + ',';
            } else {
                this.TotalCategories = this.TotalCategories + this.selectedCategories[i].categoryId;
            }
        }
    }

    /**
     * Handles  'searchSelectedCategory' event. And show the searched result  in the form
     *
     * @param filter searchbox  value
     */
    searchSelectedCategory(filter: String) {
        this.filteredArray = this.selectedCategories.filter(item => {
                if (item.name.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
                    if (this.filteredArray != null) {
                        this.show = true;
                    }
                    return true;
                }
                return false;
            }
        );
    }

    // editing Product Form with product list values

    editProductForm(productDetail) {

        this.uploadImage = productDetail.productImage;
        this.selectedCategories = productDetail.Category;
        this.changeDetectRef.detectChanges();
        this.productName.setValue(productDetail.name);
        this.sku.setValue(productDetail.sku);
        this.upc.setValue(productDetail.upc);
        this.price.setValue(productDetail.price);
        this.location.setValue(productDetail.location);
        this.quantity.setValue(productDetail.quantity);
        this.minimumQuantity.setValue(productDetail.minimumQuantity);
        this.subtractStock.setValue(productDetail.subtractStock);
        this.outOfStockStatus.setValue(productDetail.stockStatusId);
        this.status.setValue(productDetail.isActive);
        this.model.setValue(productDetail.manufacturerId);
        this.requiredShipping.setValue(productDetail.shipping);
        this.dateAvailable.setValue(productDetail.dateAvailable);
        this.sortOrder.setValue(productDetail.sortOrder);
        this.productDescription.setValue(productDetail.description);
        this.metaTagTitle.setValue(productDetail.metaTagTitle);
        this.condition.setValue(productDetail.condition);

    }

    // getting values from media popup
    uploadProductImages() {
        const modalRef = this.popup.open(ImagemanagerpopupComponent, {
            backdrop: 'static', keyboard: false,
            size: 'lg'
        });
        modalRef.result.then((result) => {
                if ((result !== '') && (result !== undefined)) {
                    this.uploadImage.push(result);
                }
                this.changeDetectRef.detectChanges();
                this.closeResult = `Closed with: ${'result'}`;
            },
            (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                console.log(this.closeResult);
            });
    }


    // delete image
    deleteImage(i) {
        this.uploadImage.splice(i, 1);
    }

    /**
     * Handles  'onSubmit' event. Calls productSandbox doProductUpdate function if (this.editId) else
     * calls productSandbox doProductAdd function.
     * @param user entire form value
     */
    onSubmit(user) {
        this.submittedValues = true;
        if((this.editId)&&(this.addOneTime!=true))
        {
            this.addSelecctedCategories();
        }
        if (!this.user.valid) {
            this.validateAllFormFields(this.user);
            return;
        }
        this.onetimeEdit = true;
        this.param.productName = user.productName;
        this.param.metaTagTitle = user.metaTagTitle;
        this.param.productDescription = user.productDescription;
        this.param.upc = user.upc;
        this.param.sku = user.sku;
        this.param.image = this.uploadImage;
        this.param.categoryId = this.TotalCategories;
        this.param.model = user.model;
        this.param.location = user.location;
        this.param.price = user.price;
        this.param.minimumQuantity = user.minimumQuantity;
        this.param.quantity = user.quantity;
        this.param.subtractStock = user.subtractStock;
        this.param.outOfStockStatus = user.outOfStockStatus;
        this.param.requiredShipping = user.requiredShipping;
        this.param.dateAvailable = user.dateAvailable;
        this.param.status = user.status;
        this.param.sortOrder = user.sortOrder;
        this.param.condition = user.condition;
        if (this.editId) {
            this.param.productId = this.editId;
            this.productSandbox.doProductUpdate(this.param);
        } else {
            this.productSandbox.doProductAdd(this.param);
        }

    }

    // validation for the formGroup
    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({onlySelf: true});
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }

    // unsubscribing the subscribed

    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }

}

