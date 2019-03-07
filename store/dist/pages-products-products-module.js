(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-products-module"],{

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-pagination/dist/ngx-pagination.js ***!
  \************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var PaginationService = (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id != null ? config.id : this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'directionLinks': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'autoHide': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'responsive': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'previousLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'nextLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPaginationLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPageLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderCurrentLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./src/default/pages/products/product-filter/product-filter.component.html":
/*!*********************************************************************************!*\
  !*** ./src/default/pages/products/product-filter/product-filter.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-accordion displayMode=\"flat\" multi=\"true\">\n    <mat-expansion-panel expanded>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                <h4>Categories</h4>\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div class=\"categories-wrapper categories-dropdown\" perfectScrollbar>\n            <app-category-list [isClicked]=\"isClicked\" [categories]=\"listSandbox.categoryList$ | async\" [categoryParentId]=\"0\" (change)=\"onChangeCategory($event)\"></app-category-list>\n        </div>\n    </mat-expansion-panel>\n\n    <mat-expansion-panel expanded>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                <h4>Price</h4>\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted\">\n            <span>From: <b>{{priceFrom}}</b></span>\n            <span>To: <b>{{priceTo}}</b></span>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"filter-price\">\n            <mat-slider color=\"primary\" max=\"1000\" min=\"1\" thumb-label=\"true\" [(ngModel)]=\"priceFrom\" (ngModelChange)=\"selectPrice()\"></mat-slider>\n            <mat-slider color=\"warn\" max=\"10000\" min=\"1000\" thumb-label=\"true\" [(ngModel)]=\"priceTo\" (ngModelChange)=\"selectPrice()\"></mat-slider>\n        </div>\n    </mat-expansion-panel>\n\n    <mat-expansion-panel expanded>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                <h4>Condition</h4>\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div fxLayout=\"column\">\n            <!--<mat-checkbox color=\"primary\" *ngFor=\"let condition of conditions\" value=\"true\" (change)=\"changeCondition($event, condition.value)\">{{condition.option}}</mat-checkbox>-->\n            <mat-radio-group>\n                <mat-radio-button color=\"primary\"  (change)=\"changeCondition($event, condition.value)\" [value]=\"condition.value\" *ngFor=\"let condition of conditions\">{{condition.option}}</mat-radio-button>\n            </mat-radio-group>\n        </div>\n    </mat-expansion-panel>\n\n    <mat-expansion-panel expanded>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                <h4>Brands</h4>\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-brands\">\n            <button mat-raised-button *ngFor=\"let brand of listSandbox.manufacturer$ | async\" (click)=\"selectBrand(brand.manufacturerId)\">\n                <img [src]=\" imagePath + '?width=80&height=80&path='+ brand.imagePath + '&name='+ brand.image\"/>\n            </button>\n        </div>\n    </mat-expansion-panel>\n\n</mat-accordion>"

/***/ }),

/***/ "./src/default/pages/products/product-filter/product-filter.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/default/pages/products/product-filter/product-filter.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-expansion-panel-header-title {\n  text-transform: uppercase; }\n\n.filter-buttons button {\n  min-width: 36px;\n  margin: 0 6px 10px 0;\n  padding: 0; }\n\n.filter-price .mat-slider-horizontal {\n  min-width: 110px; }\n\n.filter-brands button {\n  width: 66px;\n  height: 44px;\n  min-width: 66px;\n  margin: 0 6px 10px 0;\n  padding: 0px;\n  overflow: hidden; }\n\n.filter-brands button img {\n    width: 66px;\n    height: 44px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzZmxvcmV6bGVhbm8vRG9jdW1lbnRzL3dvcmtzcGFjZS9jb29wY2FuYXByby90aWVuZGEvc3RvcmUvc3JjL2RlZmF1bHQvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC1maWx0ZXIvcHJvZHVjdC1maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBeUIsRUFDMUI7O0FBQ0Q7RUFFSSxnQkFBZTtFQUNmLHFCQUFvQjtFQUNwQixXQUFVLEVBQ1g7O0FBR0g7RUFFSSxpQkFBZ0IsRUFDakI7O0FBR0g7RUFFSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGdCQUFlO0VBQ2YscUJBQW9CO0VBQ3BCLGFBQVk7RUFDWixpQkFBZ0IsRUFLakI7O0FBWkg7SUFTTSxZQUFXO0lBQ1gsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9kZWZhdWx0L3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QtZmlsdGVyL3Byb2R1Y3QtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5maWx0ZXItYnV0dG9uc3tcbiAgYnV0dG9ue1xuICAgIG1pbi13aWR0aDogMzZweDtcbiAgICBtYXJnaW46IDAgNnB4IDEwcHggMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbi5maWx0ZXItcHJpY2V7XG4gIC5tYXQtc2xpZGVyLWhvcml6b250YWx7XG4gICAgbWluLXdpZHRoOiAxMTBweDtcbiAgfVxufVxuXG4uZmlsdGVyLWJyYW5kc3tcbiAgYnV0dG9ue1xuICAgIHdpZHRoOiA2NnB4O1xuICAgIGhlaWdodDogNDRweDtcbiAgICBtaW4td2lkdGg6IDY2cHg7XG4gICAgbWFyZ2luOiAwIDZweCAxMHB4IDA7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgfVxuICB9XG59Il19 */"

/***/ }),

/***/ "./src/default/pages/products/product-filter/product-filter.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/default/pages/products/product-filter/product-filter.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterComponent", function() { return ProductFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var _core_service_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/service/config.service */ "./src/core/service/config.service.ts");
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




var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent(router, listSandbox, configService) {
        this.router = router;
        this.listSandbox = listSandbox;
        this.configService = configService;
        this.priceFrom = '';
        this.priceTo = '';
        this.conditions = [{ option: 'New', value: 1 }, { option: 'Used', value: 0 }];
        this.brand = '';
        this.category = '';
        this.keyword = '';
        this.condition = '';
        this.isClicked = [];
        this.progressEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
        this.imagePath = this.configService.get('resize').imageUrl;
        this.getCategories();
        this.getBrands();
    };
    ProductFilterComponent.prototype.onChangeCategory = function (categoryId) {
        this.category = categoryId;
        this.getProducts();
    };
    ProductFilterComponent.prototype.getBrands = function () {
        var params = {};
        params.limit = '';
        params.offset = 0;
        params.keyword = '';
        this.listSandbox.getManufacturerList(params);
    };
    ProductFilterComponent.prototype.selectBrand = function (brandId) {
        this.brand = brandId;
        this.getProducts();
    };
    ProductFilterComponent.prototype.getCategories = function () {
        var params = {};
        params.limit = '';
        params.offset = 0;
        params.keyword = '';
        params.sortOrder = '';
        this.listSandbox.getCategoryList(params);
    };
    ProductFilterComponent.prototype.getProducts = function () {
        var params = {};
        params.limit = 10;
        params.offset = 0;
        params.manufacturerId = this.brand;
        params.keyword = this.keyword;
        params.categoryId = this.category;
        params.priceFrom = this.priceFrom;
        params.priceTo = this.priceTo;
        params.condition = this.condition;
        this.progressEmit.emit(params);
        this.listSandbox.getProductList(params);
        params.count = true;
        this.listSandbox.getProductCount(params);
    };
    ProductFilterComponent.prototype.changeCondition = function (event, id) {
        console.log('event', event);
        this.condition = id;
        this.getProducts();
    };
    ProductFilterComponent.prototype.selectPrice = function () {
        this.getProducts();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductFilterComponent.prototype, "isClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductFilterComponent.prototype, "progressEmit", void 0);
    ProductFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spurt-product-filter',
            template: __webpack_require__(/*! ./product-filter.component.html */ "./src/default/pages/products/product-filter/product-filter.component.html"),
            styles: [__webpack_require__(/*! ./product-filter.component.scss */ "./src/default/pages/products/product-filter/product-filter.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_2__["ListsSandbox"], _core_service_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "./src/default/pages/products/product/product-zoom/product-zoom.component.html":
/*!*************************************************************************************!*\
  !*** ./src/default/pages/products/product/product-zoom/product-zoom.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"controls\">\r\n    <button mat-mini-fab color=\"primary\" class=\"zoom-in\" (click)=\"zoomIn()\"><mat-icon>zoom_in</mat-icon></button>\r\n    <button mat-mini-fab color=\"primary\" class=\"zoom-out\" (click)=\"zoomOut()\"><mat-icon>zoom_out</mat-icon></button>\r\n    <button mat-mini-fab color=\"warn\" class=\"close\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n</div>\r\n<div mat-dialog-content>\r\n    <div class=\"viewer\">\r\n        <img [src]=\"image\" #zoomImage>\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./src/default/pages/products/product/product-zoom/product-zoom.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/default/pages/products/product/product-zoom/product-zoom.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".zoom-dialog .mat-dialog-container {\n  overflow: visible !important; }\n  .zoom-dialog .mat-dialog-container .controls {\n    position: relative; }\n  .zoom-dialog .mat-dialog-container .controls button {\n      position: absolute;\n      top: -44px; }\n  .zoom-dialog .mat-dialog-container .controls .zoom-in {\n      right: 44px; }\n  .zoom-dialog .mat-dialog-container .controls .zoom-out {\n      right: 0; }\n  .zoom-dialog .mat-dialog-container .controls .close {\n      right: -44px; }\n  .zoom-dialog .mat-dialog-container .viewer {\n    width: 100%;\n    text-align: center; }\n  .zoom-dialog .mat-dialog-container .viewer img {\n      max-width: 60%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzZmxvcmV6bGVhbm8vRG9jdW1lbnRzL3dvcmtzcGFjZS9jb29wY2FuYXByby90aWVuZGEvc3RvcmUvc3JjL2RlZmF1bHQvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC9wcm9kdWN0LXpvb20vcHJvZHVjdC16b29tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsNkJBQTRCLEVBd0IvQjtFQTFCTDtJQUlZLG1CQUFrQixFQWNyQjtFQWxCVDtNQU1nQixtQkFBa0I7TUFDbEIsV0FBVSxFQUNiO0VBUmI7TUFVZ0IsWUFBVyxFQUNkO0VBWGI7TUFhZ0IsU0FBUSxFQUNYO0VBZGI7TUFnQmdCLGFBQVksRUFDZjtFQWpCYjtJQW9CWSxZQUFXO0lBQ1gsbUJBQWtCLEVBSXJCO0VBekJUO01BdUJnQixlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9kZWZhdWx0L3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC16b29tL3Byb2R1Y3Qtem9vbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi56b29tLWRpYWxvZ3tcclxuICAgIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5jb250cm9sc3tcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC00NHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC56b29tLWlue1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQ0cHg7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC56b29tLW91dHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2xvc2V7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTQ0cHg7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52aWV3ZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/default/pages/products/product/product-zoom/product-zoom.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/default/pages/products/product/product-zoom/product-zoom.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductZoomComponent", function() { return ProductZoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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


var ProductZoomComponent = /** @class */ (function () {
    function ProductZoomComponent(dialogRef, image) {
        this.dialogRef = dialogRef;
        this.image = image;
        this.count = 10;
        this.maxWidth = 60;
    }
    ProductZoomComponent.prototype.ngOnInit = function () {
    };
    ProductZoomComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ProductZoomComponent.prototype.zoomIn = function () {
        if (this.count < 60) {
            this.maxWidth = this.maxWidth + this.count;
            this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
            this.count = this.count + 10;
        }
    };
    ProductZoomComponent.prototype.zoomOut = function () {
        if (this.count > 10) {
            this.count = this.count - 10;
            this.maxWidth = this.maxWidth - this.count;
            this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('zoomImage'),
        __metadata("design:type", Object)
    ], ProductZoomComponent.prototype, "zoomImage", void 0);
    ProductZoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-zoom',
            template: __webpack_require__(/*! ./product-zoom.component.html */ "./src/default/pages/products/product/product-zoom/product-zoom.component.html"),
            styles: [__webpack_require__(/*! ./product-zoom.component.scss */ "./src/default/pages/products/product/product-zoom/product-zoom.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ProductZoomComponent);
    return ProductZoomComponent;
}());



/***/ }),

/***/ "./src/default/pages/products/product/product.component.html":
/*!*******************************************************************!*\
  !*** ./src/default/pages/products/product/product.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"35\" fxFlex.md=\"45\">\r\n        <mat-card class=\"product-image\">\r\n            <button mat-icon-button (click)=\"openZoomViewer()\" fxHide=\"false\" fxHide.gt-md><mat-icon>fullscreen</mat-icon></button>\r\n            <img *ngIf=\"image\" [src]=\"image\" (mousemove)=\"onMouseMove($event)\" (mouseleave)=\"onMouseLeave($event)\"/>\r\n        </mat-card>\r\n\r\n        <div class=\"small-carousel\">\r\n            <div class=\"swiper-container\" [swiper]=\"config\">\r\n                <div class=\"swiper-wrapper\">\r\n                    <div *ngFor=\"let image of (productDetail.productDetails$ | async)?.productImage\" class=\"swiper-slide\">\r\n                        <mat-card (click)=\"selectImage(image)\" class=\"p-1\">\r\n                            <img [attr.data-src]=\"imagePath + '?width=60&height=60&path=' + image.containerName + '&name=' + image.image\" class=\"swiper-lazy\"/>\r\n                            <div class=\"swiper-lazy-preloader\"></div>\r\n                        </mat-card>\r\n                    </div>\r\n                </div>\r\n                <button mat-icon-button class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n                <button mat-icon-button class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"45\" fxFlex.md=\"55\" ngClass.gt-sm=\"px-3 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n        \r\n        <div #zoomViewer fxShow=\"false\" fxShow.gt-md>\r\n            <mat-card *ngIf=\"zoomImage\" class=\"zoom-viewer mat-elevation-z18\" [ngStyle]=\"{'background-image': 'url(' + zoomImage + ')'}\"></mat-card>\r\n        </div>\r\n\r\n        <h2>{{(productDetail.productDetails$ | async)?.name}}</h2>\r\n        <div class=\"py-1 lh\">\r\n            <p><span class=\"text-muted fw-500\">Category: </span><span *ngIf=\"(productDetail.productDetails$ | async)?.Category[0]\">{{(productDetail.productDetails$ | async)?.Category[0].categoryName}}</span></p>\r\n            <p><span class=\"text-muted fw-500\">Availibility: </span><span>Available</span></p>\r\n        </div>                 \r\n        <div class=\"py-1\">\r\n            <!--<app-rating [ratingsCount]=\"product?.ratingsCount\" [ratingsValue]=\"product?.ratingsValue\" [direction]=\"'row'\"></app-rating>-->\r\n        </div>\r\n        <!--<p class=\"py-1 text-muted lh\">{{(productDetail.productDetails$ | async)?.description}}</p>-->\r\n\r\n        <div class=\"divider mt-1\"></div>\r\n        <h2 class=\"py-2 new-price\">{{((productDetail.productDetails$ | async)?.price) | currency:'INR':'symbol-narrow'}}</h2>\r\n\r\n        <!--<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"details text-muted py-1\">-->\r\n            <!--<div *ngIf=\"product?.color\" class=\"color\">-->\r\n                <!--<span class=\"fw-500\">Select Color:</span>-->\r\n                <!--<button mat-raised-button *ngFor=\"let color of product?.color\" [style.background]=\"color\">&nbsp;</button>              -->\r\n            <!--</div>-->\r\n            <!--<div *ngIf=\"product?.size\" class=\"size\" ngClass.xs=\"mt-1\">-->\r\n                <!--<span class=\"fw-500\">Select Size:</span>-->\r\n                <!--<button mat-raised-button *ngFor=\"let size of product?.size\">{{size}}</button>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n\r\n        <div class=\"py-1\">\r\n            <app-controls [product]=\"productDetail.productDetails$ | async\" [type]=\"'detail'\"></app-controls>\r\n        </div>\r\n\r\n        <div class=\"divider\"></div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted py-1\">\r\n            <button mat-button><mat-icon>mail_outline</mat-icon> Email to a Friend</button>\r\n            <button mat-icon-button><mat-icon>share</mat-icon></button>\r\n        </div>\r\n\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"20\" fxHide fxShow.gt-md> \r\n\r\n        <div fxLayout=\"row wrap\" class=\"info-bar\" ngClass.gt-md=\"m-0\">\r\n            <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\">\r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"mat-icon-xlg text-muted m-0\">card_giftcard</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p>BONUS PLUS</p> \r\n                        <span class=\"text-muted m-0\">Make fun of shopping and collect bonuses</span>\r\n                    </div> \r\n                </mat-card> \r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\"> \r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"mat-icon-xlg text-muted m-0\">local_shipping</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p>FREE SHIPPING</p> \r\n                        <span class=\"text-muted m-0\">Free shipping on all orders over $99</span>\r\n                    </div> \r\n                </mat-card>\r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.md=\"25\"fxFlex.sm=\"50\" class=\"mt-16\"> \r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"mat-icon-xlg text-muted m-0\">monetization_on</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p>MONEY BACK GUARANTEE</p> \r\n                        <span class=\"text-muted m-0\">30 Days money return guarantee</span>\r\n                    </div> \r\n                </mat-card>\r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\"> \r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"mat-icon-xlg text-muted m-0\">history</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p>ONLINE SUPPORT 24/7</p> \r\n                        <span class=\"text-muted m-0\">Call us: (+100) 123 456 7890</span>\r\n                    </div> \r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div fxLayout=\"row wrap\" class=\"mt-2\">\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"78\" fxFlex.md=\"74\">\r\n        <mat-card> \r\n            <mat-tab-group [@.disabled]=\"true\" [selectedIndex]=\"0\">       \r\n                <mat-tab label=\"Description\">\r\n                    <div class=\"full-desc lh\">\r\n                        <p>{{(productDetail.productDetails$ | async)?.description}}</p>\r\n                        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nulla metus. Maecenas commodo turpis dui, porttitor tincidunt enim mollis a. Curabitur eu velit mi. Nullam congue turpis id metus sollicitudin, id cursus nulla laoreet. Proin commodo eu felis at malesuada. Nulla ac facilisis justo, eget vulputate ex. Nulla nec laoreet nulla. Cras auctor leo at diam congue, quis convallis urna pulvinar. Nunc ut mi nulla. Nunc ligula massa, vulputate sed scelerisque sit amet, dapibus semper est. Sed sed blandit turpis. Vestibulum id porttitor ligula, at iaculis ligula. Pellentesque vel tellus sit amet mauris aliquet bibendum id et lorem.</p>-->\r\n                        <!--<ul class=\"px-2 mt-1\">-->\r\n                            <!--<li>Phasellus eu justo dictum, varius eros ut, posuere sapien.</li>-->\r\n                            <!--<li>Nulla eu erat sit amet enim lobortis rhoncus.</li>-->\r\n                            <!--<li>Etiam eu mauris in massa convallis ornare non id ex.</li>-->\r\n                            <!--<li>Nam sagittis augue at pretium pharetra.</li>-->\r\n                            <!--<li>Sed a sem id massa egestas porta a sit amet felis.</li>-->\r\n                            <!--<li>Duis aliquam urna in sapien cursus consequat.</li>-->\r\n                        <!--</ul>-->\r\n                        <!--<p class=\"mt-1\">Duis eu felis ultricies urna pharetra efficitur nec non elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur posuere eu justo eget mollis. Sed semper accumsan urna vel rutrum. Nulla condimentum quis lacus ut semper. Quisque at massa pretium, porta ligula ut, rutrum elit. Pellentesque et orci sit amet dolor laoreet tempor sed eu sem. Morbi lacinia pellentesque tellus euismod eleifend.</p>-->\r\n                        <!--<p class=\"mt-1\">Quisque fringilla eros id ligula luctus, a gravida augue sodales. Sed eget augue ut lectus condimentum volutpat. Morbi quis nunc viverra, gravida arcu quis, varius metus. Praesent tincidunt ipsum est, quis molestie ligula efficitur ut. Nunc interdum erat eu tortor maximus suscipit. Vivamus nec laoreet dui. Nullam dignissim laoreet metus quis pretium.</p>-->\r\n                    </div>\r\n                </mat-tab>\r\n            </mat-tab-group>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"22\" fxFlex.md=\"26\" ngClass.gt-sm=\"pl-3\" fxHide fxShow.gt-sm>\r\n        <img src=\"https://via.placeholder.com/400x310/EEEEEE/9E9E9E/?text=Banner%201\" alt=\"\" class=\"mw-100 d-block\">\r\n        <img src=\"https://via.placeholder.com/400x310/EEEEEE/9E9E9E/?text=Banner%202\" alt=\"\" class=\"mw-100 d-block mt-3\">\r\n        <img src=\"https://via.placeholder.com/400x310/EEEEEE/9E9E9E/?text=Banner%203\" alt=\"\" class=\"mw-100 d-block mt-3\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"py-2 mt-2\">\r\n    <h2>Related Products</h2>\r\n    <div class=\"divider\"></div>\r\n    <app-products-carousel [products]=\"productDetail.relatedProducts$ | async\"></app-products-carousel>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/default/pages/products/product/product.component.scss":
/*!*******************************************************************!*\
  !*** ./src/default/pages/products/product/product.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card.product-image {\n  padding: 6px;\n  text-align: center; }\n  .mat-card.product-image button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 99; }\n  .mat-card.product-image img {\n    max-width: 100%; }\n  .small-carousel {\n  margin-top: 8px; }\n  .small-carousel .swiper-container {\n    padding: 2px; }\n  .small-carousel .swiper-container .swiper-slide {\n      text-align: center; }\n  .small-carousel .swiper-container .swiper-slide img {\n        max-width: 100%; }\n  .small-carousel .swiper-button-next.swiper-button-disabled,\n  .small-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n  .small-carousel .swiper-button-prev {\n    left: -10px; }\n  .small-carousel .swiper-button-next {\n    right: -10px; }\n  .mat-card.zoom-viewer {\n  position: absolute;\n  display: none;\n  background-repeat: no-repeat;\n  padding: 8px;\n  z-index: 99; }\n  .mt-16 {\n  margin-top: 16px; }\n  .details button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px; }\n  .mat-list.reviews .mat-list-item .mat-list-avatar.review-author {\n  width: 80px;\n  height: 80px; }\n  .mat-list.reviews .mat-list-item .mat-line.text {\n  white-space: unset;\n  font-style: italic;\n  margin: 10px 0; }\n  .full-desc {\n  padding: 30px 40px; }\n  @media (min-width: 1280px) {\n  .mat-card.product-image img {\n    cursor: zoom-in;\n    cursor: url('zoom.svg') 10 10, zoom-in; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzZmxvcmV6bGVhbm8vRG9jdW1lbnRzL3dvcmtzcGFjZS9jb29wY2FuYXByby90aWVuZGEvc3RvcmUvc3JjL2RlZmF1bHQvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQixFQVVyQjtFQVpEO0lBSVEsbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixTQUFRO0lBQ1IsWUFBVyxFQUNkO0VBUkw7SUFVUSxnQkFBZSxFQUNsQjtFQUdMO0VBQ0ksZ0JBQWUsRUFvQmxCO0VBckJEO0lBR1EsYUFBWSxFQU9mO0VBVkw7TUFLWSxtQkFBa0IsRUFJckI7RUFUVDtRQU9nQixnQkFBZSxFQUNsQjtFQVJiOztJQWFRLFdBQVUsRUFDYjtFQWRMO0lBZ0JRLFlBQVcsRUFDZDtFQWpCTDtJQW1CUSxhQUFZLEVBQ2Y7RUFHTDtFQUNJLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsNkJBQTRCO0VBQzVCLGFBQVk7RUFDWixZQUFXLEVBQ2Q7RUFFRDtFQUNJLGlCQUFnQixFQUNuQjtFQUVEO0VBQ0ksV0FBUztFQUNULGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CO0VBRUQ7RUFFUSxZQUFXO0VBQ1gsYUFBWSxFQUNmO0VBSkw7RUFNUSxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGVBQWMsRUFDakI7RUFFTDtFQUNJLG1CQUFrQixFQUNyQjtFQUdEO0VBQ0k7SUFDSSxnQkFBZTtJQUNmLHVDQUFzRSxFQUN6RSxFQUFBIiwiZmlsZSI6InNyYy9kZWZhdWx0L3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZC5wcm9kdWN0LWltYWdlIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLnNtYWxsLWNhcm91c2Vse1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgLnN3aXBlci1jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgIC5zd2lwZXItc2xpZGV7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkLCBcclxuICAgIC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1idXR0b24tcHJldntcclxuICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgIH1cclxuICAgIC5zd2lwZXItYnV0dG9uLW5leHR7XHJcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LWNhcmQuem9vbS12aWV3ZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59XHJcblxyXG4ubXQtMTZ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uZGV0YWlscyBidXR0b257XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtaW4td2lkdGg6IDM2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcblxyXG4ubWF0LWxpc3QucmV2aWV3c3tcclxuICAgIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC1hdmF0YXIucmV2aWV3LWF1dGhvcntcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmUudGV4dHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG59XHJcbi5mdWxsLWRlc2N7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7ICBcclxuICAgIC5tYXQtY2FyZC5wcm9kdWN0LWltYWdlIGltZ3tcclxuICAgICAgICBjdXJzb3I6IHpvb20taW47XHJcbiAgICAgICAgY3Vyc29yOnVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vdGhlcnMvem9vbS5zdmcnKSAxMCAxMCwgem9vbS1pbjtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/default/pages/products/product/product.component.ts":
/*!*****************************************************************!*\
  !*** ./src/default/pages/products/product/product.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-zoom/product-zoom.component */ "./src/default/pages/products/product/product-zoom/product-zoom.component.ts");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var _core_service_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/service/config.service */ "./src/core/service/config.service.ts");
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








var ProductComponent = /** @class */ (function () {
    function ProductComponent(activatedRoute, dialog, formBuilder, productDetail, configService) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.productDetail = productDetail;
        this.configService = configService;
        this.config = {};
        this.subscriptions = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imagePath = this.configService.get('resize').imageUrl;
        // subscribe route params and trigger selected product detail, related products
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.getProductdetail();
            _this.getRelatedProducts();
        });
    };
    ProductComponent.prototype.getRelatedProducts = function () {
        var params = {};
        params.productId = this.id;
        this.productDetail.getRelatedProducts(params);
    };
    ProductComponent.prototype.getProductdetail = function () {
        var _this = this;
        var params = {};
        params.id = this.id;
        this.productDetail.getProductDetails(params);
        this.subscriptions.push(this.productDetail.productDetails$.subscribe(function (detail) {
            if (detail && detail.productImage.length > 0) {
                _this.image = _this.imagePath + '?width=390&height=390&path=' +
                    detail.productImage[0].containerName + '&name=' + detail.productImage[0].image;
                _this.zoomImage = _this.imagePath + '?width=660&height=660&path=' +
                    detail.productImage[0].containerName + '&name=' + detail.productImage[0].image;
                setTimeout(function () {
                    _this.config.observer = true;
                });
            }
        }));
    };
    ProductComponent.prototype.ngAfterViewInit = function () {
        this.config = {
            observer: false,
            slidesPerView: 4,
            spaceBetween: 10,
            keyboard: true,
            navigation: true,
            pagination: false,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                480: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 3,
                }
            }
        };
    };
    ProductComponent.prototype.selectImage = function (image) {
        console.log('imagessssssssss', image);
        this.image = this.imagePath + '?width=390&height=3900&path=' + image.containerName + '&name=' + image.image;
        this.zoomImage = this.imagePath + '?width=660&height=660&path=' + image.containerName + '&name=' + image.image;
    };
    ProductComponent.prototype.onMouseMove = function (e) {
        if (window.innerWidth >= 1280) {
            var image, offsetX, offsetY, x, y, zoomer;
            image = e.currentTarget;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            x = offsetX / image.offsetWidth * 100;
            y = offsetY / image.offsetHeight * 100;
            zoomer = this.zoomViewer.nativeElement.children[0];
            if (zoomer) {
                zoomer.style.backgroundPosition = x + '% ' + y + '%';
                zoomer.style.display = "block";
                zoomer.style.height = image.height + 'px';
                zoomer.style.width = image.width + 'px';
            }
        }
    };
    ProductComponent.prototype.onMouseLeave = function (event) {
        this.zoomViewer.nativeElement.children[0].style.display = "none";
    };
    ProductComponent.prototype.openZoomViewer = function () {
        this.dialog.open(_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_5__["ProductZoomComponent"], {
            data: this.zoomImage,
            panelClass: 'zoom-dialog'
        });
    };
    // unsubscribe subscribed events while destroy the page
    ProductComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.subscriptions.forEach(function (each) {
            each.unsubscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('zoomViewer'),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "zoomViewer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperDirective"]),
        __metadata("design:type", ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperDirective"])
    ], ProductComponent.prototype, "directiveRef", void 0);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/default/pages/products/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/default/pages/products/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_6__["ListsSandbox"], _core_service_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/default/pages/products/products.component.html":
/*!************************************************************!*\
  !*** ./src/default/pages/products/products.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n    <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"filter-sidenav\"\r\n                 perfectScrollbar>\r\n        <app-spurt-product-filter (progressEmit)=\"receiveProgress($event)\" [isClicked]=\"isClicked\"></app-spurt-product-filter>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content class=\"all-products\" ngClass.gt-sm=\"p-left\">\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\"\r\n             class=\"filter-row mat-elevation-z1 text-muted\">\r\n            <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n                <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <div>\r\n                <a mat-button [matMenuTriggerFor]=\"sortMenu\" #sortMenuTrigger=\"matMenuTrigger\">\r\n                    {{sortData}}\r\n                    <mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n                </a>\r\n                <mat-menu #sortMenu=\"matMenu\" xPosition=\"before\" class=\"app-dropdown\" overlapTrigger=\"true\">\r\n                    <span (mouseleave)=\"sortMenuTrigger.closeMenu()\">\r\n                        <button mat-menu-item *ngFor=\"let sort of sortings\" (click)=\"changeSorting(sort)\">\r\n                            <span>{{sort.order}}</span>\r\n                        </button>\r\n                    </span>\r\n                </mat-menu>\r\n            </div>\r\n            <div>\r\n                <button mat-icon-button (click)=\"changeViewType('list', 100)\">\r\n                    <mat-icon>view_list</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"changeViewType('grid', 33.3)\">\r\n                    <mat-icon>view_module</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"changeViewType('grid', 25)\">\r\n                    <mat-icon>view_comfy</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"viewType == 'grid'\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n            <div class=\"wrapper\" *ngIf=\"listSandbox.productLoading$ | async\">\r\n                <div class=\"overlay\">\r\n                    <div class=\"spinner-wrapper\">\r\n                        <app-spinner [isShow]=\"listSandbox.productLoading$ | async\"></app-spinner>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngFor=\"let product of (listSandbox.productlist$ | async)\"\r\n                 fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\" fxFlex.sm=\"50\" class=\"col\">\r\n                <mat-card class=\"product-item text-center\">\r\n                    <mat-chip-list *ngIf=\"product.discount\">\r\n                        <mat-chip color=\"warn\" selected=\"true\">{{product.discount}}% OFF</mat-chip>\r\n                    </mat-chip-list>\r\n                    <a [routerLink]=\"['/products/productdetails', product.productId]\" class=\"image-link\">\r\n                        <img *ngIf=\"product.Images[0]\" style=\"height:200px\"\r\n                             [src]=\"imagePath+ '?width=260&height=260&path=' + product.Images[0].containerName + '&name=' + product.Images[0].image\"\r\n                             alt=\"\">\r\n                    </a>\r\n                    <h4 class=\"category text-muted\">{{product.metaTagTitle }}</h4>\r\n                    <a [routerLink]=\"['/products/productdetails', product.productId]\" class=\"title text-truncate\">\r\n                        {{product.name}}\r\n                    </a>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\"new-price\">{{product.price | currency:'INR':'symbol-narrow'}}</p>\r\n                        </div>\r\n                        <!--<app-rating [ratingsCount]=\"product.ratingsCount\" [ratingsValue]=\"product.ratingsValue\" [direction]=\"'column'\"></app-rating>-->\r\n                    </div>\r\n                    <div class=\"divider mt-2\"></div>\r\n                    <div class=\"icons\">\r\n                        <app-controls [product]=\"product\" [type]=\"'all'\"\r\n                                      (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"viewType == 'list'\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n            <div *ngFor=\"let product of (listSandbox.productlist$ | async) | paginate: { itemsPerPage: count, currentPage: page }\"\r\n                 fxFlex=\"100\" class=\"col\">\r\n                 <mat-card class=\"product-item\" style=\"height:90%\">\r\n                    <div fxLayout=\"row wrap\">\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"p-2\">\r\n                            <mat-chip-list *ngIf=\"product.discount\" class=\"list-view\">\r\n                                <mat-chip color=\"warn\" selected=\"true\">{{product.discount}}% OFF</mat-chip>\r\n                            </mat-chip-list>\r\n                            <a [routerLink]=\"['/products/productdetails', product.productId]\" class=\"image-link\">\r\n                                <img *ngIf=\"product.Images[0]\"\r\n                                     [src]=\"imagePath + '?width=280&height=280&path=' + product.Images[0].containerName + '&name=' + product.Images[0].image\"\r\n                                     alt=\"\">\r\n                            </a>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"p-2\">\r\n                            <h4 class=\"category text-muted\">{{product.metaTagTitle}}</h4>\r\n                            <a [routerLink]=\"['/products/productdetails', product.productId]\" class=\"title\">\r\n                                {{product.name}}\r\n                            </a>\r\n                            <!--<p class=\"py-1 text-muted lh\">{{product.description}}</p>-->\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                                <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                                    <p class=\"new-price\">{{product.price | currency:'INR':'symbol-narrow'}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"divider\"></div>\r\n                            <div class=\"icons\">\r\n                                <app-controls [product]=\"product\"\r\n                                              (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"(listSandbox.productLoaded$ | async) && (listSandbox.productlist$ | async)?.length == 0\" fxLayout=\"row wrap\">\r\n            <div fxFlex=\"100\" fxFlex.gt-xs=\"90\" class=\"p-2\">\r\n                <p style=\"margin-left: 50%;margin-top:10%;color:gray\">No Results Found</p>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"(listSandbox.productlist$ | async)?.length > 0\" fxLayout=\"row wrap\">\r\n            <div fxFlex=\"100\">\r\n                <mat-card class=\"p-0 text-center\">\r\n                    <mat-paginator\r\n                            [length]=\"listSandbox.productcount$|async\"\r\n                            [pageSize]=\"pagesize\"\r\n                            [pageIndex]=\"index\"\r\n                            [pageSizeOptions]=\"[10,15,20]\"\r\n                            (page)=\"onPageChange($event)\">\r\n                    </mat-paginator>\r\n                    <!--<pagination-controls class=\"product-pagination\" autoHide=\"false\" maxSize=\"5\"-->\r\n                                         <!--(pageChange)=\"onPageChanged($event)\"></pagination-controls>-->\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/default/pages/products/products.component.scss":
/*!************************************************************!*\
  !*** ./src/default/pages/products/products.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-sidenav {\n  width: 280px;\n  border: 0 !important; }\n  .filter-sidenav .mat-expansion-panel-header-title {\n    text-transform: uppercase; }\n  .filter-row {\n  background: #fff;\n  padding: 8px 12px; }\n  .all-products {\n  min-height: 400px;\n  padding: 2px;\n  overflow: hidden; }\n  .all-products.p-left {\n    padding-left: 16px; }\n  .products-wrapper {\n  margin: 8px -8px; }\n  .products-wrapper .col {\n    padding: 8px; }\n  .categories-wrapper {\n  position: relative;\n  max-height: 300px; }\n  .filter-buttons button {\n  min-width: 36px;\n  margin: 0 6px 10px 0;\n  padding: 0; }\n  .filter-price .mat-slider-horizontal {\n  min-width: 110px; }\n  .filter-brands button {\n  width: 66px;\n  height: 44px;\n  min-width: 66px;\n  margin: 0 6px 10px 0;\n  padding: 0px;\n  overflow: hidden; }\n  .filter-brands button img {\n    width: 66px;\n    height: 44px; }\n  .wrapper {\n  width: 100%;\n  height: 100%; }\n  .overlay {\n  position: absolute;\n  z-index: 1002;\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 100%;\n  height: 100%; }\n  .spinner-wrapper {\n  display: flex;\n  justify-content: center;\n  justify-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzZmxvcmV6bGVhbm8vRG9jdW1lbnRzL3dvcmtzcGFjZS9jb29wY2FuYXByby90aWVuZGEvc3RvcmUvc3JjL2RlZmF1bHQvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1oscUJBQW9CLEVBSXZCO0VBTkQ7SUFJUSwwQkFBeUIsRUFDNUI7RUFFTDtFQUNJLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFDcEI7RUFDRDtFQUNJLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osaUJBQWdCLEVBSW5CO0VBUEQ7SUFLUSxtQkFBa0IsRUFDckI7RUFHTDtFQUNJLGlCQUFnQixFQUluQjtFQUxEO0lBR1EsYUFBWSxFQUNmO0VBR0w7RUFDSSxtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQ3BCO0VBRUQ7RUFFUSxnQkFBZTtFQUNmLHFCQUFvQjtFQUNwQixXQUFVLEVBQ2I7RUFHTDtFQUVRLGlCQUFnQixFQUNuQjtFQUdMO0VBRVEsWUFBVztFQUNYLGFBQVk7RUFDWixnQkFBZTtFQUNmLHFCQUFvQjtFQUNwQixhQUFZO0VBQ1osaUJBQWdCLEVBS25CO0VBWkw7SUFTWSxZQUFXO0lBQ1gsYUFBWSxFQUNmO0VBR1Q7RUFDSSxZQUFXO0VBQ1gsYUFBWSxFQUNmO0VBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLDJDQUEwQztFQUMxQyxZQUFXO0VBQ1gsYUFBWSxFQUNmO0VBRUQ7RUFDSSxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLHNCQUFxQixFQUN4QiIsImZpbGUiOiJzcmMvZGVmYXVsdC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItc2lkZW5hdntcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG59XHJcbi5maWx0ZXItcm93e1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG59XHJcbi5hbGwtcHJvZHVjdHN7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmLnAtbGVmdHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0cy13cmFwcGVye1xyXG4gICAgbWFyZ2luOiA4cHggLThweDtcclxuICAgIC5jb2x7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2F0ZWdvcmllcy13cmFwcGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXItYnV0dG9uc3tcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtaW4td2lkdGg6IDM2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDZweCAxMHB4IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRlci1wcmljZXtcclxuICAgIC5tYXQtc2xpZGVyLWhvcml6b250YWx7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRlci1icmFuZHN7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgd2lkdGg6IDY2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNjZweDtcclxuICAgICAgICBtYXJnaW46IDAgNnB4IDEwcHggMDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi53cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDAyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zcGlubmVyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/default/pages/products/products.component.ts":
/*!**********************************************************!*\
  !*** ./src/default/pages/products/products.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_components_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/products-carousel/product-dialog/product-dialog.component */ "./src/default/shared/components/products-carousel/product-dialog/product-dialog.component.ts");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var _core_service_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/service/config.service */ "./src/core/service/config.service.ts");
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






var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(activatedRoute, dialog, router, listSandbox, configService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.router = router;
        this.listSandbox = listSandbox;
        this.configService = configService;
        this.sidenavOpen = true;
        this.viewType = 'grid';
        this.viewCol = 25;
        this.sortData = 'Highest first';
        // parameters for product list
        this.startKey = 0;
        this.viewOrder = 0;
        this.keyword = '';
        this.categoryId = '';
        this.brand = '';
        this.priceFrom = '';
        this.priceTo = '';
        // pagination
        this.pagesize = 10;
        this.index = 0;
        this.isClicked = [];
        // subscribe route params
        this.activatedRoute.params.subscribe(function (param) {
            _this.queryParams = param;
            // if route params contains id assign id to the parameter categoryId
            if (_this.queryParams.id) {
                console.log('queryparamName', _this.queryParams.id);
                _this.isClicked = [];
                _this.isClicked[_this.queryParams.id] = true;
                _this.categoryId = _this.queryParams.id;
            }
            // if route params contains keyword assign id to the parameter keyword
            if (_this.queryParams.keyword) {
                console.log('queryparamName', _this.queryParams.keyword);
                _this.keyword = _this.queryParams.keyword;
            }
            _this.getProductList(_this.startKey, _this.viewOrder);
        });
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.sortings = [
            { order: 'Lowest first', value: 1 },
            { order: 'Highest first', value: 0 }
        ];
        this.imagePath = this.configService.get('resize').imageUrl;
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
    };
    /**
     * fetch product list from service. calling getProductList function from sandbox
     *
     * @param limit number of records to be load
     * @param offset startkey of the records to be load
     * @param manufacturerId brand id to be filtered
     * @param categoryId category id to be filtered
     * @param price price to be filtered
     * @param priceFrom filter from price
     * @param keyword filter to price
     */
    ProductsComponent.prototype.getProductList = function (offset, price) {
        var params = {};
        params.limit = this.pagesize;
        params.offset = offset;
        params.manufacturerId = this.brand;
        params.categoryId = this.categoryId;
        params.keyword = this.keyword;
        params.price = price;
        params.priceFrom = this.priceFrom;
        params.priceTo = this.priceTo;
        this.listSandbox.getProductList(params);
        params.count = true;
        this.listSandbox.getProductCount(params);
    };
    /**
     * open quick view of the product
     *
     * @param data passing selected product detail to dialog
     */
    ProductsComponent.prototype.openProductDialog = function (product) {
        var _this = this;
        console.log('product', product);
        var dialogRef = this.dialog.open(_shared_components_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ProductDialogComponent"], {
            panelClass: 'product-dialog',
            data: product,
        });
        dialogRef.afterClosed().subscribe(function (products) {
            if (products) {
                _this.router.navigate(['/products/productdetails', products.productId]);
            }
        });
    };
    // sidebar open close based on the window size
    ProductsComponent.prototype.onWindowResize = function () {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    };
    ProductsComponent.prototype.changeViewType = function (viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
    };
    ProductsComponent.prototype.changeSorting = function (sort) {
        this.sortData = sort.order;
        this.viewOrder = sort.value;
        this.getProductList(this.startKey, this.viewOrder);
    };
    ProductsComponent.prototype.onPageChange = function (event) {
        this.startKey = (event.pageSize * event.pageIndex);
        this.pagesize = event.pageSize;
        this.index = event.pageIndex;
        this.getProductList(this.startKey, this.viewOrder);
    };
    // receive data which is emitted from the child component through event emitter
    ProductsComponent.prototype.receiveProgress = function (event) {
        console.log('progress', event);
        this.categoryId = event.categoryId;
        this.brand = event.manufacturerId;
        this.priceFrom = event.priceFrom;
        this.priceTo = event.priceTo;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], ProductsComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProductsComponent.prototype, "onWindowResize", null);
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/default/pages/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/default/pages/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_4__["ListsSandbox"], _core_service_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/default/pages/products/products.module.ts":
/*!*******************************************************!*\
  !*** ./src/default/pages/products/products.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/default/shared/shared.module.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products.component */ "./src/default/pages/products/products.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "./src/default/pages/products/product/product.component.ts");
/* harmony import */ var _product_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product-zoom/product-zoom.component */ "./src/default/pages/products/product/product-zoom/product-zoom.component.ts");
/* harmony import */ var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/pipes/pipes.module */ "./src/default/shared/pipes/pipes.module.ts");
/* harmony import */ var _shared_components_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/index */ "./src/default/shared/components/index.ts");
/* harmony import */ var _product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-filter/product-filter.component */ "./src/default/pages/products/product-filter/product-filter.component.ts");
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
    { path: '', component: _products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"], pathMatch: 'full' },
    { path: 'productdetails/:id', component: _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"], pathMatch: 'full' }
];
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _shared_components_index__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"],
                _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"],
            ],
            declarations: [
                _products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
                _product_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_9__["ProductZoomComponent"],
                _product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_12__["ProductFilterComponent"],
            ],
            entryComponents: [
                _product_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_9__["ProductZoomComponent"]
            ],
            providers: []
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-products-products-module.js.map