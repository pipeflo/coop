(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-contact-module"],{

/***/ "./src/default/pages/contact/contact.component.html":
/*!**********************************************************!*\
  !*** ./src/default/pages/contact/contact.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayout=\"row wrap\" fxLayoutAlign=\"space-around\">\r\n    <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">\r\n            <mat-icon color=\"primary\" class=\"mat-icon-lg\">home</mat-icon>\r\n            <h3 class=\"primary-text py-1\">ADDRESS :</h3>\r\n            <span class=\"text-muted\">{{(listSandbox.settingDetail$ | async)?.storeAddress}}</span>\r\n        </div>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <mat-icon color=\"primary\" class=\"mat-icon-lg\">call</mat-icon>\r\n            <h3 class=\"primary-text py-1\">PHONES :</h3>\r\n            <span class=\"text-muted\">{{(listSandbox.settingDetail$ | async)?.storeTelephone}}</span>\r\n        </div>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <mat-icon color=\"primary\" class=\"mat-icon-lg\">mail_outline</mat-icon>\r\n            <h3 class=\"primary-text py-1\">E-MAIL :</h3>\r\n            <span class=\"text-muted\">{{(listSandbox.settingDetail$ | async)?.storeEmail}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"divider w-100 mt-2\"></div>\r\n    <h3 class=\"w-100 text-center py-2\">CONTACT US</h3>\r\n    \r\n    <form [formGroup]=\"contactForm\" (ngSubmit)=\"onContactFormSubmit(contactForm.value)\" fxLayout=\"row wrap\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n          <mat-form-field class=\"w-100\">\r\n              <input matInput placeholder=\"Name\" formControlName=\"name\" required>\r\n              <mat-error *ngIf=\"contactForm.controls.name.errors?.required\">Name is required</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n          <mat-form-field class=\"w-100\">\r\n              <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n              <mat-error *ngIf=\"contactForm.controls.email.errors?.required\">Email is required</mat-error>\r\n              <mat-error *ngIf=\"contactForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n          <mat-form-field class=\"w-100\">\r\n              <input matInput placeholder=\"Phone\" formControlName=\"phone\" required>\r\n              <mat-error *ngIf=\"contactForm.controls.phone.errors?.required\">Phone is required</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxFlex=\"100\" class=\"px-1 mt-1\">\r\n          <mat-form-field class=\"w-100\">\r\n              <input matInput placeholder=\"Message\" formControlName=\"message\" required>\r\n              <mat-error *ngIf=\"contactForm.controls.message.errors?.required\">Message is required</mat-error>\r\n          </mat-form-field>\r\n        </div> \r\n        <div class=\"w-100 py-2 text-center\">\r\n          <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n        </div> \r\n    </form>\r\n\r\n</mat-card>"

/***/ }),

/***/ "./src/default/pages/contact/contact.component.scss":
/*!**********************************************************!*\
  !*** ./src/default/pages/contact/contact.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZGVmYXVsdC9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/default/pages/contact/contact.component.ts":
/*!********************************************************!*\
  !*** ./src/default/pages/contact/contact.component.ts ***!
  \********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/utils/app-validators */ "./src/default/theme/utils/app-validators.ts");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */




var ContactComponent = /** @class */ (function () {
    function ContactComponent(formBuilder, listSandbox) {
        this.formBuilder = formBuilder;
        this.listSandbox = listSandbox;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.initContactForm();
    };
    // create form group for the contact form
    ContactComponent.prototype.initContactForm = function () {
        this.contactForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__["emailValidator"]])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    // call contact us function from sand box if the contact form is valid
    ContactComponent.prototype.onContactFormSubmit = function (values) {
        if (!this.contactForm.valid) {
            return;
        }
        this.listSandbox.contactUs(this.contactForm.value);
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/default/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/default/pages/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_3__["ListsSandbox"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/default/pages/contact/contact.module.ts":
/*!*****************************************************!*\
  !*** ./src/default/pages/contact/contact.module.ts ***!
  \*****************************************************/
/*! exports provided: routes, ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/default/shared/shared.module.ts");
/* harmony import */ var _shared_components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/index */ "./src/default/shared/components/index.ts");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.component */ "./src/default/pages/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */







var routes = [
    { path: '', component: _contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], pathMatch: 'full' }
];
var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _shared_components_index__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
            ],
            declarations: [
                _contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
            ]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-contact-contact-module.js.map