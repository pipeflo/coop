(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/default/pages/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/default/pages/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-carousel [slides]=\"listSandbox.bannerList$ | async\"></app-main-carousel>\r\n\r\n<div fxLayout=\"row wrap\" class=\"info-bar\">\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n        <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"mat-icon-xlg text-muted m-0\">card_giftcard</mat-icon>\r\n            <div class=\"content\">\r\n                <p>BONUS PLUS</p> \r\n                <span class=\"text-muted m-0\">Make fun of shopping and collect bonuses</span>\r\n            </div> \r\n        </mat-card> \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\"> \r\n        <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"mat-icon-xlg text-muted m-0\">local_shipping</mat-icon>\r\n            <div class=\"content\">\r\n                <p>FREE SHIPPING</p> \r\n                <span class=\"text-muted m-0\">Free shipping on all orders over $99</span>\r\n            </div> \r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\"> \r\n        <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"mat-icon-xlg text-muted m-0\">monetization_on</mat-icon>\r\n            <div class=\"content\">\r\n                <p>MONEY BACK GUARANTEE</p> \r\n                <span class=\"text-muted m-0\">30 Days money return guarantee</span>\r\n            </div> \r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\"> \r\n        <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"mat-icon-xlg text-muted m-0\">history</mat-icon>\r\n            <div class=\"content\">\r\n                <p>ONLINE SUPPORT 24/7</p> \r\n                <span class=\"text-muted m-0\">Call us: (+100) 123 456 7890</span>\r\n            </div> \r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"products-tabs\">  \r\n     <h3 style=\"color: gray\">Featured Products</h3>\r\n    <app-products-carousel [products]=\"listSandbox.featuredList$ | async\"></app-products-carousel>\r\n\r\n</div>\r\n<app-brands-carousel [brands]=\"listSandbox.manufacturer$ | async\"></app-brands-carousel>"

/***/ }),

/***/ "./src/default/pages/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/default/pages/home/home.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products-tabs {\n  margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzZmxvcmV6bGVhbm8vRG9jdW1lbnRzL3dvcmtzcGFjZS9jb29wY2FuYXByby90aWVuZGEvc3RvcmUvc3JjL2RlZmF1bHQvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9kZWZhdWx0L3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0cy10YWJze1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDsgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/default/pages/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/default/pages/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
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


var HomeComponent = /** @class */ (function () {
    function HomeComponent(listSandbox) {
        this.listSandbox = listSandbox;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getBannerList();
        this.getBransList();
        this.getFeaturedList();
    };
    // fetch banner list from sandbox
    HomeComponent.prototype.getBannerList = function () {
        var params = {};
        params.limit = 10;
        params.offset = 0;
        this.listSandbox.getBannerList(params);
    };
    // fetch brand list from sandbox
    HomeComponent.prototype.getBransList = function () {
        var params = {};
        params.limit = 10;
        params.offset = 0;
        params.keyword = '';
        this.listSandbox.getManufacturerList(params);
    };
    // fetch featured product list from sandbox
    HomeComponent.prototype.getFeaturedList = function () {
        var params = {};
        params.limit = '';
        params.offset = 0;
        params.keyword = '';
        params.sku = '';
        this.listSandbox.getFeaturedList(params);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/default/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/default/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_1__["ListsSandbox"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/default/pages/home/home.module.ts":
/*!***********************************************!*\
  !*** ./src/default/pages/home/home.module.ts ***!
  \***********************************************/
/*! exports provided: routes, HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/default/shared/shared.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/default/pages/home/home.component.ts");
/* harmony import */ var _shared_components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/index */ "./src/default/shared/components/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _shared_components_index__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map