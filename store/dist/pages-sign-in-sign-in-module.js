(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-in-sign-in-module"],{

/***/ "./src/core/auth/auth.sandbox.ts":
/*!***************************************!*\
  !*** ./src/core/auth/auth.sandbox.ts ***!
  \***************************************/
/*! exports provided: AuthSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSandbox", function() { return AuthSandbox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _action_auth_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action/auth.action */ "./src/core/auth/action/auth.action.ts");
/* harmony import */ var _reducer_auth_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer/auth.selector */ "./src/core/auth/reducer/auth.selector.ts");
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/login.model */ "./src/core/auth/models/login.model.ts");
/* harmony import */ var _models_register_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/register.model */ "./src/core/auth/models/register.model.ts");
/* harmony import */ var _common_common_sandbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/common.sandbox */ "./src/core/common/common.sandbox.ts");
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








var AuthSandbox = /** @class */ (function () {
    function AuthSandbox(router, appState$, commonSandbox) {
        this.router = router;
        this.appState$ = appState$;
        this.commonSandbox = commonSandbox;
        this.subscriptions = [];
        /* login status*/
        this.userToken$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_4__["getToken"]);
        this.loginLoading$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_4__["get_loginLoading"]);
        this.loginLoaded$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_4__["get_loginLoaded"]);
        this.loginFailed$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_4__["get_loginFailed"]);
        /* register status*/
        this.registerLoading$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_4__["get_registerLoading"]);
        this.registerLoaded$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_4__["get_registerLoaded"]);
        this.registerFailed$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_4__["get_registerFailed"]);
        /* recover account status*/
        this.recoverLoading$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_4__["get_recoverLoading"]);
        this.recoverLoaded$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_4__["get_recoverLoaded"]);
        this.recoverFailed$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_4__["get_recoverFailed"]);
        this.registerEvents();
    }
    AuthSandbox.prototype.doLogin = function (params) {
        this.appState$.dispatch(new _action_auth_action__WEBPACK_IMPORTED_MODULE_3__["DoLogin"](new _models_login_model__WEBPACK_IMPORTED_MODULE_5__["loginModel"](params)));
    };
    AuthSandbox.prototype.doRegister = function (params) {
        this.appState$.dispatch(new _action_auth_action__WEBPACK_IMPORTED_MODULE_3__["DoRegister"](new _models_register_model__WEBPACK_IMPORTED_MODULE_6__["RegisterModel"](params)));
    };
    AuthSandbox.prototype.doRecover = function (params) {
        this.appState$.dispatch(new _action_auth_action__WEBPACK_IMPORTED_MODULE_3__["RecoverAccount"](params));
    };
    /**
     * Registers events
     */
    AuthSandbox.prototype.registerEvents = function () {
        var _this = this;
        this.subscriptions.push(this.userToken$.subscribe(function (token) {
            if (token) {
                localStorage.setItem('userToken', token.token);
                localStorage.setItem('user', JSON.stringify(token.user));
                _this.commonSandbox.doGetProfile();
                _this.commonSandbox.getWishlistCounts({ count: true });
                console.log('token', token);
                _this.router.navigate(['/']);
            }
        }));
    };
    /**
     * Un registers events
     */
    AuthSandbox.prototype.unsubscribeEvents = function () {
        this.subscriptions.forEach(function (each) {
            each.unsubscribe();
        });
    };
    AuthSandbox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _common_common_sandbox__WEBPACK_IMPORTED_MODULE_7__["CommonSandbox"]])
    ], AuthSandbox);
    return AuthSandbox;
}());



/***/ }),

/***/ "./src/core/auth/auth.service.ts":
/*!***************************************!*\
  !*** ./src/core/auth/auth.service.ts ***!
  \***************************************/
/*! exports provided: AuthApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthApiService", function() { return AuthApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/api/api */ "./src/core/providers/api/api.ts");
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


var AuthApiService = /** @class */ (function (_super) {
    __extends(AuthApiService, _super);
    function AuthApiService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.base = _this.getBaseUrl();
        return _this;
    }
    /* call login api*/
    AuthApiService.prototype.doLogin = function (params) {
        return this.http.post(this.base + 'customer/login', params);
    };
    /* call register api*/
    AuthApiService.prototype.doRegister = function (params) {
        return this.http.post(this.base + 'customer/register', params);
    };
    /* call recover account api*/
    AuthApiService.prototype.doRecover = function (params) {
        return this.http.post(this.base + 'customer/forgot-password', params);
    };
    AuthApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthApiService);
    return AuthApiService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_1__["Api"]));



/***/ }),

/***/ "./src/core/auth/effects/auth.effect.ts":
/*!**********************************************!*\
  !*** ./src/core/auth/effects/auth.effect.ts ***!
  \**********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_loginResponse_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/loginResponse.model */ "./src/core/auth/models/loginResponse.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/core/auth/auth.service.ts");
/* harmony import */ var _action_auth_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../action/auth.action */ "./src/core/auth/action/auth.action.ts");
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









var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, authApi, appState$) {
        var _this = this;
        this.actions$ = actions$;
        this.authApi = authApi;
        this.appState$ = appState$;
        this.login$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_auth_action__WEBPACK_IMPORTED_MODULE_8__["ActionTypes"].DO_LOGIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (state) {
            return _this.authApi.doLogin(state)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (loggedin) { return new _action_auth_action__WEBPACK_IMPORTED_MODULE_8__["DoLoginSuccess"](new _models_loginResponse_model__WEBPACK_IMPORTED_MODULE_6__["LoginResponseModel"](loggedin)); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _action_auth_action__WEBPACK_IMPORTED_MODULE_8__["DoLoginFail"](error)); }));
        }));
        this.register$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_auth_action__WEBPACK_IMPORTED_MODULE_8__["ActionTypes"].DO_REGISTER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (state) {
            if (state.phoneNumber == '') {
                delete state.phoneNumber;
            }
            return _this.authApi.doRegister(state)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (register) { return new _action_auth_action__WEBPACK_IMPORTED_MODULE_8__["DoRegisterSuccess"](register); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _action_auth_action__WEBPACK_IMPORTED_MODULE_8__["DoRegisterFail"](error)); }));
        }));
        this.recover$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_auth_action__WEBPACK_IMPORTED_MODULE_8__["ActionTypes"].DO_RECOVER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (state) {
            return _this.authApi.doRecover(state)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (register) { return new _action_auth_action__WEBPACK_IMPORTED_MODULE_8__["RecoverAccountSuccess"](register); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _action_auth_action__WEBPACK_IMPORTED_MODULE_8__["RecoverAccountFail"](error)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AuthEffects.prototype, "login$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AuthEffects.prototype, "register$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AuthEffects.prototype, "recover$", void 0);
    AuthEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthApiService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/core/auth/models/login.model.ts":
/*!*********************************************!*\
  !*** ./src/core/auth/models/login.model.ts ***!
  \*********************************************/
/*! exports provided: loginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginModel", function() { return loginModel; });
/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var loginModel = /** @class */ (function () {
    function loginModel(loginRequest) {
        this.emailId = loginRequest.email || '';
        this.password = loginRequest.password || '';
    }
    return loginModel;
}());



/***/ }),

/***/ "./src/core/auth/models/loginResponse.model.ts":
/*!*****************************************************!*\
  !*** ./src/core/auth/models/loginResponse.model.ts ***!
  \*****************************************************/
/*! exports provided: LoginResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginResponseModel", function() { return LoginResponseModel; });
/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var LoginResponseModel = /** @class */ (function () {
    function LoginResponseModel(loginResponse) {
        this.user_token = loginResponse.data || '';
    }
    return LoginResponseModel;
}());



/***/ }),

/***/ "./src/core/auth/models/register.model.ts":
/*!************************************************!*\
  !*** ./src/core/auth/models/register.model.ts ***!
  \************************************************/
/*! exports provided: RegisterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModel", function() { return RegisterModel; });
/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var RegisterModel = /** @class */ (function () {
    function RegisterModel(registerRequest) {
        this.name = registerRequest.name || '';
        this.password = registerRequest.password || '';
        this.confirmPassword = registerRequest.confirmPassword || '';
        this.emailId = registerRequest.email || '';
        this.phoneNumber = registerRequest.phoneNumber || '';
    }
    return RegisterModel;
}());



/***/ }),

/***/ "./src/core/auth/reducer/auth.selector.ts":
/*!************************************************!*\
  !*** ./src/core/auth/reducer/auth.selector.ts ***!
  \************************************************/
/*! exports provided: getState, getToken, get_loginLoading, get_loginLoaded, get_loginFailed, get_registerLoading, get_registerLoaded, get_registerFailed, get_recoverLoading, get_recoverLoaded, get_recoverFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_loginLoading", function() { return get_loginLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_loginLoaded", function() { return get_loginLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_loginFailed", function() { return get_loginFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_registerLoading", function() { return get_registerLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_registerLoaded", function() { return get_registerLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_registerFailed", function() { return get_registerFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_recoverLoading", function() { return get_recoverLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_recoverLoaded", function() { return get_recoverLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_recoverFailed", function() { return get_recoverFailed; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.reducer */ "./src/core/auth/reducer/auth.reducer.ts");
/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


var getState = function (State) { return State.auth; };
var getToken = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getToken"]);
var get_loginLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getLoginLoading"]);
var get_loginLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getLoginLoaded"]);
var get_loginFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getLoginFailed"]);
var get_registerLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getRegisterLoading"]);
var get_registerLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getRegisterLoaded"]);
var get_registerFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getRegisterFailed"]);
var get_recoverLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getRecoverLoading"]);
var get_recoverLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getRecoverLoaded"]);
var get_recoverFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getRecoverFailed"]);


/***/ }),

/***/ "./src/default/pages/sign-in/sign-in.component.html":
/*!**********************************************************!*\
  !*** ./src/default/pages/sign-in/sign-in.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <div fxLayout=\"row wrap\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-2\" *ngIf=\"!isForgot\">\r\n            <h2 class=\"text-muted text-center\">Sign In</h2>\r\n            <form [formGroup]=\"loginForm\" novalidate>\r\n                <mat-form-field class=\"w-100 mt-2\">\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                    <mat-error *ngIf=\"loginForm.controls.email.hasError('required')\">Email is required</mat-error>\r\n                    <mat-error *ngIf=\"loginForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"w-100 mt-1\">\r\n                    <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\">\r\n                    <mat-error *ngIf=\"loginForm.controls.password.hasError('required') \">Password is required</mat-error>\r\n                    <mat-error *ngIf=\"loginForm.controls.password.hasError('minlength') \">Password isn't long enough, minimum of 5 characters</mat-error>\r\n                </mat-form-field> \r\n                <div class=\"text-center mt-2\">\r\n                    <button mat-fab color=\"primary\" class=\"mat-elevation-z6\" (click)=\"onLoginFormSubmit()\">\r\n                        <i *ngIf=\"authsandbox.loginLoading$ | async\" class=\"fa fa-spinner fa-spin\" style=\"font-size:24px\"></i>\r\n                        <mat-icon *ngIf=\"!(authsandbox.loginLoading$ | async)\" >exit_to_app</mat-icon>\r\n                    </button>\r\n                </div> \r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mt-2\">\r\n                    <div class=\"divider w-100\"></div>\r\n                    <h3 class=\"text-muted auth\">or Sign in with one click</h3>\r\n                    <div class=\"divider w-100\"></div>\r\n\r\n                </div>               \r\n\r\n\r\n                <div class=\"text-center py-2\">                   \r\n                    <svg class=\"social-icon\" viewBox=\"0 0 24 24\" matTooltip=\"Facebook\">\r\n                        <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z\" />\r\n                    </svg>\r\n                    <svg class=\"social-icon\" viewBox=\"0 0 24 24\" matTooltip=\"Twitter\">\r\n                        <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z\" />\r\n                    </svg>\r\n                    <svg class=\"social-icon\" viewBox=\"0 0 24 24\" matTooltip=\"Google\">\r\n                        <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M19.5,12H18V10.5H17V12H15.5V13H17V14.5H18V13H19.5V12M9.65,11.36V12.9H12.22C12.09,13.54 11.45,14.83 9.65,14.83C8.11,14.83 6.89,13.54 6.89,12C6.89,10.46 8.11,9.17 9.65,9.17C10.55,9.17 11.13,9.56 11.45,9.88L12.67,8.72C11.9,7.95 10.87,7.5 9.65,7.5C7.14,7.5 5.15,9.5 5.15,12C5.15,14.5 7.14,16.5 9.65,16.5C12.22,16.5 13.96,14.7 13.96,12.13C13.96,11.81 13.96,11.61 13.89,11.36H9.65Z\" />\r\n                    </svg>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mt-2\">\r\n                    <div class=\"divider w-100\"></div>\r\n                    <h5 class=\"text-muted auth forgot\" (click)=\"isForgot=true\">Forgotten Account?</h5>\r\n                    <div class=\"divider w-100\"></div>\r\n\r\n                </div>\r\n\r\n            </form>\r\n        </div>\r\n\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-2\" *ngIf=\"isForgot\">\r\n            <h2 class=\"text-muted text-center\">Forgot Account</h2>\r\n            <form [formGroup]=\"forgotForm\" novalidate>\r\n                <mat-form-field class=\"w-100 mt-2\">\r\n                    <input matInput placeholder=\"Email\" formControlName=\"emailId\" required>\r\n                    <mat-error *ngIf=\"forgotForm.controls.emailId.hasError('required')\">Email is required</mat-error>\r\n                    <mat-error *ngIf=\"forgotForm.controls.emailId.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                </mat-form-field>\r\n                <div class=\"text-center mt-2\">\r\n                    <button mat-fab color=\"primary\" class=\"mat-elevation-z6\" (click)=\"onForgotFormSubmit()\">\r\n                        <i *ngIf=\"authsandbox.recoverLoading$ | async\" class=\"fa fa-spinner fa-spin\" style=\"font-size:24px\"></i>\r\n                        <mat-icon *ngIf=\"!(authsandbox.recoverLoading$ | async)\" >exit_to_app</mat-icon>\r\n                    </button>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mt-2\">\r\n                    <div class=\"divider w-100\"></div>\r\n                    <h3 class=\"text-muted auth forgot\" (click)=\"isForgot=false\">or Go back to Login</h3>\r\n                    <div class=\"divider w-100\"></div>\r\n\r\n                </div>\r\n\r\n            </form>\r\n        </div>\r\n\r\n\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-2\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n            <h2 class=\"text-muted text-center\">Don't have an account? Sign up now!</h2>\r\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterFormSubmit()\" novalidate>\r\n                <mat-form-field class=\"w-100 mt-2\">\r\n                  <input matInput placeholder=\"Full Name\" formControlName=\"name\" required>\r\n                  <mat-error *ngIf=\"registerForm.controls.name.hasError('required') && registerForm.controls.name.touched\">Full Name is required</mat-error>\r\n                  <mat-error *ngIf=\"registerForm.controls.name.hasError('minlength')\">Full Name isn't long enough, minimum of 3 characters</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"w-100 mt-1\">\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                    <mat-error *ngIf=\"registerForm.controls.email.hasError('required')\">Email is required</mat-error>\r\n                    <mat-error *ngIf=\"registerForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"w-100 mt-1\">\r\n                    <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" minlength=\"6\" required>\r\n                    <mat-error *ngIf=\"registerForm.controls.password.hasError('required')\">Password is required</mat-error>\r\n                    <mat-error *ngIf=\"registerForm.controls.password.hasError('minlength')\">Password isn't long enough, minimum of 5 characters</mat-error>\r\n                </mat-form-field> \r\n                <mat-form-field class=\"w-100 mt-1\">\r\n                  <input matInput placeholder=\"Confirm Password\" formControlName=\"confirmPassword\" type=\"password\" required>\r\n                  <mat-error *ngIf=\"registerForm.controls.confirmPassword.hasError('required')\">Confirm Password is required</mat-error>\r\n                  <mat-error *ngIf=\"registerForm.controls.confirmPassword.hasError('mismatchedPasswords')\">Passwords do not match</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"w-100 mt-1\">\r\n                  <input matInput placeholder=\"Phone Number\" formControlName=\"phoneNumber\" type=\"number\">\r\n                    <!--<mat-error *ngIf=\"registerForm.controls.phoneNumber.hasError('minlength') || registerForm.controls.phoneNumber.hasError('maxlength')\">Phone Number should have 10 characters</mat-error>-->\r\n\r\n                </mat-form-field>\r\n\r\n                <div class=\"text-center mt-2\">\r\n                    <button mat-fab color=\"primary\" type=\"submit\" class=\"mat-elevation-z6\" >\r\n                        <i *ngIf=\"authsandbox.registerLoading$ | async\" class=\"fa fa-spinner fa-spin\" style=\"font-size:24px\"></i>\r\n                        <mat-icon *ngIf=\"!(authsandbox.registerLoading$ | async)\">person_add</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div> \r\n</mat-card>"

/***/ }),

/***/ "./src/default/pages/sign-in/sign-in.component.scss":
/*!**********************************************************!*\
  !*** ./src/default/pages/sign-in/sign-in.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth {\n  white-space: nowrap;\n  padding: 7px 14px;\n  font-weight: 500; }\n\n.forgot {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzZmxvcmV6bGVhbm8vRG9jdW1lbnRzL3dvcmtzcGFjZS9jb29wY2FuYXByby90aWVuZGEvc3RvcmUvc3JjL2RlZmF1bHQvcGFnZXMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvZGVmYXVsdC9wYWdlcy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nOiA3cHggMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7ICAgIFxyXG59XHJcbi5mb3Jnb3R7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/default/pages/sign-in/sign-in.component.ts":
/*!********************************************************!*\
  !*** ./src/default/pages/sign-in/sign-in.component.ts ***!
  \********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/utils/app-validators */ "./src/default/theme/utils/app-validators.ts");
/* harmony import */ var _core_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/auth/auth.sandbox */ "./src/core/auth/auth.sandbox.ts");
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






var SignInComponent = /** @class */ (function () {
    function SignInComponent(formBuilder, router, snackBar, authsandbox) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.snackBar = snackBar;
        this.authsandbox = authsandbox;
        this.isForgot = false;
        this.loginSubmitted = false;
    }
    SignInComponent.prototype.ngOnInit = function () {
        // initialize forms by creating form groups
        this.loginForm = this.formBuilder.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["emailValidator"]])],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])]
        });
        this.forgotForm = this.formBuilder.group({
            'emailId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["emailValidator"]])]
        });
        this.registerForm = this.formBuilder.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["emailValidator"]])],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])],
            'confirmPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])],
            'phoneNumber': ['']
        }, { validator: Object(_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["matchingPasswords"])('password', 'confirmPassword') });
    };
    /**
     * do login if the login form is valid
     *
     * it will call the login function from the sandbox
     */
    SignInComponent.prototype.onLoginFormSubmit = function () {
        this.loginSubmitted = true;
        if (this.loginForm.valid) {
            console.log(this.loginForm.value);
            this.authsandbox.doLogin(this.loginForm.value);
            this.resetAllFormFields(this.loginForm);
        }
    };
    SignInComponent.prototype.onForgotFormSubmit = function () {
        if (this.forgotForm.valid) {
            this.authsandbox.doRecover(this.forgotForm.value);
            this.resetAllFormFields(this.forgotForm);
        }
    };
    SignInComponent.prototype.onRegisterFormSubmit = function () {
        if (this.registerForm.valid) {
            this.authsandbox.doRegister(this.registerForm.value);
            this.resetAllFormFields(this.registerForm);
        }
        else {
            console.log('form', this.registerForm);
        }
    };
    SignInComponent.prototype.resetAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.reset();
                control.clearValidators();
                control.updateValueAndValidity();
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.resetAllFormFields(control);
            }
        });
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/default/pages/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/default/pages/sign-in/sign-in.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _core_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_5__["AuthSandbox"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/default/pages/sign-in/sign-in.module.ts":
/*!*****************************************************!*\
  !*** ./src/default/pages/sign-in/sign-in.module.ts ***!
  \*****************************************************/
/*! exports provided: routes, SignInModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInModule", function() { return SignInModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/default/shared/shared.module.ts");
/* harmony import */ var _sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in.component */ "./src/default/pages/sign-in/sign-in.component.ts");
/* harmony import */ var _shared_components_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/index */ "./src/default/shared/components/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_auth_effects_auth_effect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/auth/effects/auth.effect */ "./src/core/auth/effects/auth.effect.ts");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/auth/auth.service */ "./src/core/auth/auth.service.ts");
/* harmony import */ var _core_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/auth/auth.sandbox */ "./src/core/auth/auth.sandbox.ts");
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
    { path: '', component: _sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"], pathMatch: 'full' }
];
var SignInModule = /** @class */ (function () {
    function SignInModule() {
    }
    SignInModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _shared_components_index__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_core_auth_effects_auth_effect__WEBPACK_IMPORTED_MODULE_8__["AuthEffects"]]),
            ],
            declarations: [
                _sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"]
            ],
            providers: [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthApiService"], _core_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_10__["AuthSandbox"]]
        })
    ], SignInModule);
    return SignInModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sign-in-sign-in-module.js.map