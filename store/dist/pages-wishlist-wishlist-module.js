(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wishlist-wishlist-module"],{

/***/ "./src/core/wishlist/effects/wishlist.effect.ts":
/*!******************************************************!*\
  !*** ./src/core/wishlist/effects/wishlist.effect.ts ***!
  \******************************************************/
/*! exports provided: WishlistEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistEffect", function() { return WishlistEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _action_wishlist_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../action/wishlist.action */ "./src/core/wishlist/action/wishlist.action.ts");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../wishlist.service */ "./src/core/wishlist/wishlist.service.ts");
/* harmony import */ var _common_action_common_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/action/common.action */ "./src/core/common/action/common.action.ts");
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









var WishlistEffect = /** @class */ (function () {
    function WishlistEffect(actions$, authApi, appState$) {
        var _this = this;
        this.actions$ = actions$;
        this.authApi = authApi;
        this.appState$ = appState$;
        this.parameter = { limit: '', offser: 0 };
        this.countParameter = { limit: '', offser: 0, count: true };
        this.getWishlist$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_wishlist_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].get_wishlist), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (state) {
            return _this.authApi.getWishlist(state)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (wishlish) { return new _action_wishlist_action__WEBPACK_IMPORTED_MODULE_6__["getWishlistSuccess"](wishlish); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _action_wishlist_action__WEBPACK_IMPORTED_MODULE_6__["getWishlistFail"](error)); }));
        }));
        this.deleteProduct$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_wishlist_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].delete_product), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (state) {
            return _this.authApi.deleteProduct(state)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (product) { return [new _action_wishlist_action__WEBPACK_IMPORTED_MODULE_6__["deleteProductSuccess"](product),
                new _action_wishlist_action__WEBPACK_IMPORTED_MODULE_6__["getWishlist"](_this.parameter),
                new _common_action_common_action__WEBPACK_IMPORTED_MODULE_8__["GetWishlistCount"](_this.countParameter)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _action_wishlist_action__WEBPACK_IMPORTED_MODULE_6__["deleteProductFail"](error)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], WishlistEffect.prototype, "getWishlist$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], WishlistEffect.prototype, "deleteProduct$", void 0);
    WishlistEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _wishlist_service__WEBPACK_IMPORTED_MODULE_7__["WishlistService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], WishlistEffect);
    return WishlistEffect;
}());



/***/ }),

/***/ "./src/core/wishlist/reducer/wishlist.selector.ts":
/*!********************************************************!*\
  !*** ./src/core/wishlist/reducer/wishlist.selector.ts ***!
  \********************************************************/
/*! exports provided: getState, getWishlist, wishlistLoading, wishlistLoaded, wishlistFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWishlist", function() { return getWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistLoading", function() { return wishlistLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistLoaded", function() { return wishlistLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistFailed", function() { return wishlistFailed; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _wishlist_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlist.reducer */ "./src/core/wishlist/reducer/wishlist.reducer.ts");
/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


var getState = function (State) { return State.wishlist; };
var getWishlist = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _wishlist_reducer__WEBPACK_IMPORTED_MODULE_1__["getWishlist"]);
var wishlistLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _wishlist_reducer__WEBPACK_IMPORTED_MODULE_1__["getWishlistLoading"]);
var wishlistLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _wishlist_reducer__WEBPACK_IMPORTED_MODULE_1__["getWishlistLoaded"]);
var wishlistFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _wishlist_reducer__WEBPACK_IMPORTED_MODULE_1__["getWishlistFailed"]);


/***/ }),

/***/ "./src/core/wishlist/wishlist.sandbox.ts":
/*!***********************************************!*\
  !*** ./src/core/wishlist/wishlist.sandbox.ts ***!
  \***********************************************/
/*! exports provided: WishlistSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistSandbox", function() { return WishlistSandbox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _action_wishlist_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action/wishlist.action */ "./src/core/wishlist/action/wishlist.action.ts");
/* harmony import */ var _reducer_wishlist_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer/wishlist.selector */ "./src/core/wishlist/reducer/wishlist.selector.ts");
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





var WishlistSandbox = /** @class */ (function () {
    function WishlistSandbox(router, appState$) {
        this.router = router;
        this.appState$ = appState$;
        this.wishlist$ = this.appState$.select(_reducer_wishlist_selector__WEBPACK_IMPORTED_MODULE_4__["getWishlist"]);
        this.wishlistLoading$ = this.appState$.select(_reducer_wishlist_selector__WEBPACK_IMPORTED_MODULE_4__["wishlistLoading"]);
        this.wishlistLoaded$ = this.appState$.select(_reducer_wishlist_selector__WEBPACK_IMPORTED_MODULE_4__["wishlistLoaded"]);
        this.wishlistFailed$ = this.appState$.select(_reducer_wishlist_selector__WEBPACK_IMPORTED_MODULE_4__["wishlistFailed"]);
        this.subscriptions = [];
        this.registerEvents();
    }
    /* trigger get wish list action*/
    WishlistSandbox.prototype.getWishlist = function (params) {
        this.appState$.dispatch(new _action_wishlist_action__WEBPACK_IMPORTED_MODULE_3__["getWishlist"](params));
    };
    /* trigger delete item from wish list action*/
    WishlistSandbox.prototype.deleteWishlist = function (params) {
        this.appState$.dispatch(new _action_wishlist_action__WEBPACK_IMPORTED_MODULE_3__["deleteProduct"](params));
    };
    WishlistSandbox.prototype.registerEvents = function () {
    };
    WishlistSandbox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], WishlistSandbox);
    return WishlistSandbox;
}());



/***/ }),

/***/ "./src/core/wishlist/wishlist.service.ts":
/*!***********************************************!*\
  !*** ./src/core/wishlist/wishlist.service.ts ***!
  \***********************************************/
/*! exports provided: WishlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistService", function() { return WishlistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/api/api */ "./src/core/providers/api/api.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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



var WishlistService = /** @class */ (function (_super) {
    __extends(WishlistService, _super);
    function WishlistService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.base = _this.getBaseUrl();
        _this.userTokenDetail = localStorage.getItem('userToken');
        return _this;
    }
    /* get wish list api*/
    WishlistService.prototype.getWishlist = function (params) {
        return this.http.get(this.base + 'customer/wishlist-product-list');
    };
    /* delete product from wish list api*/
    WishlistService.prototype.deleteProduct = function (params) {
        console.log('params', params);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            body: { wishlistProductId: params.wishlistProductId }
        };
        return this.http.delete(this.base + 'customer/wishlist-product-delete/' + params.wishlistProductId, httpOptions);
    };
    WishlistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WishlistService);
    return WishlistService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_2__["Api"]));



/***/ }),

/***/ "./src/default/pages/wishlist/wishlist.component.html":
/*!************************************************************!*\
  !*** ./src/default/pages/wishlist/wishlist.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-chip-list *ngIf=\"(wishlistSandbox.wishlist$ | async)?.length == 0\">\r\n    <mat-chip color=\"warn\" selected=\"true\">YOU HAVE NO ITEMS IN WISH LIST.</mat-chip>\r\n</mat-chip-list>\r\n\r\n<mat-card *ngIf=\"(wishlistSandbox.wishlist$ | async)?.length > 0\" class=\"p-0\">\r\n    <div class=\"wrapper\" *ngIf=\"wishlistSandbox.wishlistLoading$ | async\">\r\n        <div class=\"overlay\">\r\n            <div class=\"spinner-wrapper\">\r\n                <app-spinner [isShow]=\"wishlistSandbox.wishlistLoading$ | async\"></app-spinner>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"mat-table wishlist-table\">\r\n        <div class=\"mat-header-row\">\r\n            <div class=\"mat-header-cell\">Product</div>\r\n            <div class=\"mat-header-cell\">Name</div>\r\n            <div class=\"mat-header-cell\">Price</div>\r\n            <div class=\"mat-header-cell\">Availabile Date</div>\r\n            <!--<div class=\"mat-header-cell\">Quantity</div>-->\r\n            <div class=\"mat-header-cell\">\r\n                <div class=\"px-1\">Action\r\n                    <!--<button mat-raised-button color=\"warn\" (click)=\"clear()\">Action</button>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngFor=\"let product of wishlistSandbox.wishlist$ | async\" class=\"mat-row\">\r\n            <div class=\"mat-cell\"><img *ngIf=\"product.productImage\"\r\n                                       [src]=\"imagePath + '?width=60&height=60&path=' + product.productImage.containerName + '&name=' + product.productImage.image\">\r\n            </div>\r\n            <div class=\"mat-cell\"><a [routerLink]=\"['/products', product.id, product.name]\" class=\"product-name\">{{product.product.name}}</a>\r\n            </div>\r\n            <div class=\"mat-cell\">{{product.product.price | currency:'INR':'symbol-narrow' }}</div> <!-- | number : '1.2-2' -->\r\n            <div class=\"mat-cell\">{{product.product.dateAvailable | date:'dd/MM/yyyy'}}</div>\r\n            <!--<div class=\"mat-cell text-muted\">-->\r\n            <!--<app-controls [product]=\"product\" [type]=\"'wish'\" (onQuantityChange)=\"getQuantity($event)\"></app-controls>-->\r\n            <!--</div>-->\r\n            <div class=\"mat-cell\">\r\n                <div class=\"p-1\">\r\n                    <button mat-mini-fab color=\"primary\" (click)=\"addToCart(product)\" matTooltip=\"Add to cart\">\r\n                        <mat-icon>add_shopping_cart</mat-icon>\r\n                    </button>\r\n                    <button mat-mini-fab color=\"warn\" (click)=\"remove(product.wishlistProductId)\" matTooltip=\"Clear\"\r\n                            class=\"remove\">\r\n                        <mat-icon>close</mat-icon>\r\n                    </button>\r\n                    <span [hidden]=\"!(wishlistSandbox.wishlistLoading$ | async)\"\r\n                          class=\"spinner-border spinner-border-sm pull-right\" role=\"status\" aria-hidden=\"true\"></span>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</mat-card>"

/***/ }),

/***/ "./src/default/pages/wishlist/wishlist.component.scss":
/*!************************************************************!*\
  !*** ./src/default/pages/wishlist/wishlist.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wishlist-table.mat-table {\n  display: block;\n  overflow-x: auto; }\n  .wishlist-table.mat-table .mat-row, .wishlist-table.mat-table .mat-header-row {\n    display: flex;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    align-items: center;\n    min-height: 48px;\n    padding: 0 24px;\n    min-width: 870px; }\n  .wishlist-table.mat-table .mat-row {\n    min-height: 100px; }\n  .wishlist-table.mat-table .mat-cell, .wishlist-table.mat-table .mat-header-cell {\n    flex: 1;\n    overflow: hidden;\n    word-wrap: break-word; }\n  .wishlist-table.mat-table .mat-header-cell {\n    font-size: 14px; }\n  .wishlist-table.mat-table .mat-cell img {\n    width: 100px; }\n  .wishlist-table.mat-table .mat-cell .product-name {\n    color: inherit;\n    text-decoration: none;\n    font-weight: 500; }\n  .wishlist-table.mat-table .mat-cell .remove {\n    margin-left: 8px; }\n  .wrapper {\n  width: 100%;\n  height: 100%; }\n  .overlay {\n  position: absolute;\n  z-index: 1002;\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 100%;\n  height: 100%; }\n  .spinner-wrapper {\n  display: flex;\n  justify-content: center;\n  justify-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzZmxvcmV6bGVhbm8vRG9jdW1lbnRzL3dvcmtzcGFjZS9jb29wY2FuYXByby90aWVuZGEvc3RvcmUvc3JjL2RlZmF1bHQvcGFnZXMvd2lzaGxpc3Qvd2lzaGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBQ2QsaUJBQWUsRUFrQ2xCO0VBcENEO0lBSVEsY0FBYTtJQUNiLHlCQUF3QjtJQUN4QiwyQkFBMEI7SUFDMUIsb0JBQW1CO0lBQ25CLGlCQUFnQjtJQUNoQixnQkFBZTtJQUNmLGlCQUFnQixFQUNuQjtFQVhMO0lBYVEsa0JBQWlCLEVBQ3BCO0VBZEw7SUFnQlEsUUFBTztJQUNQLGlCQUFnQjtJQUNoQixzQkFBcUIsRUFDeEI7RUFuQkw7SUFxQlEsZ0JBQWUsRUFDbEI7RUF0Qkw7SUF5QlksYUFBWSxFQUNmO0VBMUJUO0lBNEJZLGVBQWM7SUFDZCxzQkFBcUI7SUFDckIsaUJBQWdCLEVBQ25CO0VBL0JUO0lBaUNZLGlCQUFnQixFQUNuQjtFQUlUO0VBQ0ksWUFBVztFQUNYLGFBQVksRUFDZjtFQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYiwyQ0FBMEM7RUFDMUMsWUFBVztFQUNYLGFBQVksRUFDZjtFQUVEO0VBQ0ksY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixzQkFBcUIsRUFDeEIiLCJmaWxlIjoic3JjL2RlZmF1bHQvcGFnZXMvd2lzaGxpc3Qvd2lzaGxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lzaGxpc3QtdGFibGUubWF0LXRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3cteDphdXRvO1xyXG4gICAgLm1hdC1yb3csIC5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgICAgICBtaW4td2lkdGg6IDg3MHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1yb3d7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWNlbGwsIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWNlbGx7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LW5hbWV7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZW1vdmV7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3Bpbm5lci13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/default/pages/wishlist/wishlist.component.ts":
/*!**********************************************************!*\
  !*** ./src/default/pages/wishlist/wishlist.component.ts ***!
  \**********************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/product-control/product-control.sandbox */ "./src/core/product-control/product-control.sandbox.ts");
/* harmony import */ var _core_wishlist_wishlist_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/wishlist/wishlist.sandbox */ "./src/core/wishlist/wishlist.sandbox.ts");
/* harmony import */ var _core_service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/service/config.service */ "./src/core/service/config.service.ts");
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





var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(snackBar, wishlistSandbox, productControl, configService) {
        this.snackBar = snackBar;
        this.wishlistSandbox = wishlistSandbox;
        this.productControl = productControl;
        this.configService = configService;
        this.quantity = 1;
    }
    WishlistComponent.prototype.ngOnInit = function () {
        this.imagePath = this.configService.get('resize').imageUrl;
        var params = {};
        params.limit = 10;
        params.offset = '';
        this.wishlistSandbox.getWishlist(params);
    };
    // remove product from wishlist
    WishlistComponent.prototype.remove = function (productId) {
        var params = {};
        params.wishlistProductId = productId;
        this.wishlistSandbox.deleteWishlist(params);
    };
    // remove product from wishlist to cart
    WishlistComponent.prototype.addToCart = function (products) {
        console.log('product', products);
        var tempProduct = products.product;
        tempProduct.productImage = products.productImage;
        this.productControl.addItemsToCart(products.product);
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/default/pages/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.scss */ "./src/default/pages/wishlist/wishlist.component.scss")],
            providers: [_core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_2__["ProductControlSandbox"]]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _core_wishlist_wishlist_sandbox__WEBPACK_IMPORTED_MODULE_3__["WishlistSandbox"],
            _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_2__["ProductControlSandbox"],
            _core_service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/default/pages/wishlist/wishlist.module.ts":
/*!*******************************************************!*\
  !*** ./src/default/pages/wishlist/wishlist.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, WishlistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistModule", function() { return WishlistModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/default/shared/shared.module.ts");
/* harmony import */ var _wishlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist.component */ "./src/default/pages/wishlist/wishlist.component.ts");
/* harmony import */ var _shared_components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/index */ "./src/default/shared/components/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_wishlist_effects_wishlist_effect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/wishlist/effects/wishlist.effect */ "./src/core/wishlist/effects/wishlist.effect.ts");
/* harmony import */ var _core_wishlist_wishlist_sandbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/wishlist/wishlist.sandbox */ "./src/core/wishlist/wishlist.sandbox.ts");
/* harmony import */ var _core_wishlist_wishlist_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/wishlist/wishlist.service */ "./src/core/wishlist/wishlist.service.ts");
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






// store




var routes = [
    { path: '', component: _wishlist_component__WEBPACK_IMPORTED_MODULE_4__["WishlistComponent"], pathMatch: 'full' }
];
var WishlistModule = /** @class */ (function () {
    function WishlistModule() {
    }
    WishlistModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _shared_components_index__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_core_wishlist_effects_wishlist_effect__WEBPACK_IMPORTED_MODULE_7__["WishlistEffect"]]),
            ],
            declarations: [
                _wishlist_component__WEBPACK_IMPORTED_MODULE_4__["WishlistComponent"]
            ],
            providers: [_core_wishlist_wishlist_sandbox__WEBPACK_IMPORTED_MODULE_8__["WishlistSandbox"], _core_wishlist_wishlist_service__WEBPACK_IMPORTED_MODULE_9__["WishlistService"]]
        })
    ], WishlistModule);
    return WishlistModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-wishlist-wishlist-module.js.map