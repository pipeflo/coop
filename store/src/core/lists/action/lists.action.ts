/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Action} from '@ngrx/store';
import {type} from '../../shared/utility/utilityHelpers';
import {BannerListModel} from "../models/banner-list.model";
import {FeaturedProductModel} from "../models/featured-product.model";
import {ContactUsRequestModel} from "../models/contact-us-request.model";

export const ActionTypes = {
    GET_PRODUCT_LIST: type('[product] get product list'),
    PRODUCT_LIST_SUCCESS: type('[product] get product list success'),
    PRODUCT_LIST_FAIL: type('[product] get product list fail'),

    GET_COUNTRY_LIST: type('[country_list] country list'),
    GET_COUNTRY_LIST_SUCCESS: type('[country_list] country list success'),
    GET_COUNTRY_LIST_FAIL: type('[country_list] country list fail'),

    GET_PRODUCT_COUNT: type('[product_count] get product count'),
    PRODUCT_COUNT_SUCCESS: type('[product_count] get product count success'),
    PRODUCT_COUNT_FAIL: type('[product_count] get product count fail'),

    GET_CATEGORY_LIST: type('[category] get category list'),
    CATEGORY_LIST_SUCCESS: type('[category] get category list success'),
    CATEGORY_LIST_FAIL: type('[category] get category list fail'),

    GET_RELATED_PRODUCT_LIST: type('[RELATED_product] get RELATED_product list'),
    RELATED_PRODUCT_LIST_SUCCESS: type('[RELATED_product] get RELATED_product list success'),
    RELATED_PRODUCT_LIST_FAIL: type('[RELATED_product] get RELATED_product list fail'),

    GET_MANUFACTURER_LIST: type('[manufacturer] get manufacturer list'),
    MANUFACTURER_LIST_SUCCESS: type('[manufacturer] get manufacturer list success'),
    MANUFACTURER_LIST_FAIL: type('[manufacturer] get manufacturer list fail'),

    GET_PRODUCT_DETAIL: type('[product detail] get product detail'),
    PRODUCT_DETAIL_SUCCESS: type('[product detail] get product detail success'),
    PRODUCT_DETAIL_FAIL: type('[product detail] get product detail fail'),

    GET_BANNER_LIST: type('[banner] get banner list'),
    GET_BANNER_LIST_SUCCESS: type('[banner] get banner list success'),
    GET_BANNER_LIST_FAIL: type('[banner] get banner list fail'),

    GET_BANNER_LIST_COUNT: type('[banner_count] get banner list count'),
    GET_BANNER_LIST_COUNT_SUCCESS: type('[banner_count] get banner list count success'),
    GET_BANNER_LIST_COUNT_FAIL: type('[banner_count] get banner list count fail'),

    GET_FEATURED_PRODUCT_LIST: type('[featured_product] get featured product list '),
    GET_FEATURED_PRODUCT_LIST_SUCCESS: type('[featured_product] get featured product list success'),
    GET_FEATURED_PRODUCT_LIST_FAIL: type('[featured_product] get featured product list fail'),

    GET_PAGE_LIST: type('[page_list] get page list '),
    GET_PAGE_LIST_SUCCESS: type('[page_list] get page list success'),
    GET_PAGE_LIST_FAIL: type('[page_list] get page list fail'),

    GET_SETTINGS_ACTION: type('[setting] get settings '),
    GET_SETTINGS_SUCCESS_ACTION: type('[setting] get settings succeess'),
    GET_SETTINGS_FAIL_ACTION: type('[setting] get settings fail'),

    DO_CONTACT_US_ACTION: type('[contact_us] contact us '),
    DO_CONTACT_US_SUCCESS_ACTION: type('[contact_us] contact us succeess'),
    DO_CONTACT_US_FAIL_ACTION: type('[contact_us] contact us fail'),

    GET_PAGE_DETAIL: type('[page_detail] page detail '),
    GET_PAGE_DETAIL_SUCCESS: type('[page_detail] page detail succeess'),
    GET_PAGE_DETAIL_FAIL: type('[page_detail] page detail fail'),

};
/* get product action*/

export class GetProductList implements Action {
    type = ActionTypes.GET_PRODUCT_LIST;

    constructor(public payload: any) {
    }
}

export class GetProductListSuccess implements Action {
    type = ActionTypes.PRODUCT_LIST_SUCCESS;

    constructor(public payload: any) {
    }
}
export class GetProductListFail implements Action {
    type = ActionTypes.PRODUCT_LIST_FAIL;

    constructor(public payload: any) {
    }
}

export class GetProductCount implements Action {
    type = ActionTypes.GET_PRODUCT_COUNT;

    constructor(public payload: any) {
    }
}

export class GetProductCountSuccess implements Action {
    type = ActionTypes.PRODUCT_COUNT_SUCCESS;

    constructor(public payload: any) {
    }
}
export class GetProductCountFail implements Action {
    type = ActionTypes.PRODUCT_COUNT_FAIL;

    constructor(public payload: any) {
    }
}
/* get product detail action*/

export class GetProductDetail implements Action {
    type = ActionTypes.GET_PRODUCT_DETAIL;

    constructor(public payload: any) {
        console.log('product...........action', payload);
    }
}

export class GetProductDetailSuccess implements Action {
    type = ActionTypes.PRODUCT_DETAIL_SUCCESS;

    constructor(public payload: any) {
    }
}
export class GetProductDetailFail implements Action {
    type = ActionTypes.PRODUCT_DETAIL_FAIL;

    constructor(public payload: any) {
    }
}
/* get category action*/

export class GetCategoryList implements Action {
    type = ActionTypes.GET_CATEGORY_LIST;

    constructor(public payload: any) {
    }
}

export class GetCategoryListSuccess implements Action {
    type = ActionTypes.CATEGORY_LIST_SUCCESS;

    constructor(public payload: any) {
    }
}
export class GetCategoryListFail implements Action {
    type = ActionTypes.CATEGORY_LIST_FAIL;

    constructor(public payload: any) {
    }
}
/* get related product action*/

export class GetRelatedProductList implements Action {
    type = ActionTypes.GET_RELATED_PRODUCT_LIST;

    constructor(public payload: any) {
    }
}

export class RelatedProductListSuccess implements Action {
    type = ActionTypes.RELATED_PRODUCT_LIST_SUCCESS;

    constructor(public payload: any) {
    }
}
export class RelatedProductListFail implements Action {
    type = ActionTypes.RELATED_PRODUCT_LIST_FAIL;

    constructor(public payload: any) {
    }
}
/* get brand action*/

export class GetManufacturerList implements Action {
    type = ActionTypes.GET_MANUFACTURER_LIST;

    constructor(public payload: any) {
    }
}

export class ManufacturerListSuccess implements Action {
    type = ActionTypes.MANUFACTURER_LIST_SUCCESS;

    constructor(public payload: any) {
    }
}
export class ManufacturerListtFail implements Action {
    type = ActionTypes.MANUFACTURER_LIST_FAIL;

    constructor(public payload: any) {
    }
}
/* get banner action*/

export class GetBannerList implements Action {
    type = ActionTypes.GET_BANNER_LIST;

    constructor(public payload: BannerListModel) {
    }
}

export class GetBannerListSuccess implements Action {
    type = ActionTypes.GET_BANNER_LIST_SUCCESS;

    constructor(public payload: any) {
    }
}

export class GetBannaerListFail implements Action {
    type = ActionTypes.GET_BANNER_LIST_FAIL;

    constructor(public payload: any) {
    }
}

export class GetBannerListCount implements Action {
    type = ActionTypes.GET_BANNER_LIST_COUNT;

    constructor(public payload: BannerListModel) {
    }
}

export class GetBannerListCountSuccess implements Action {
    type = ActionTypes.GET_BANNER_LIST_SUCCESS;

    constructor(public payload: any) {
    }
}

export class GetBannaerListCountFail implements Action {
    type = ActionTypes.GET_BANNER_LIST_FAIL;

    constructor(public payload: any) {
    }
}
/* get featured product action*/

export class GetFeaturedProductList implements Action {
    type = ActionTypes.GET_FEATURED_PRODUCT_LIST;

    constructor(public payload: FeaturedProductModel) {
    }
}

export class GetFeaturedProductListSuccess implements Action {
    type = ActionTypes.GET_FEATURED_PRODUCT_LIST_SUCCESS;

    constructor(public payload: any) {
    }
}

export class GetFeaturedProductListFail implements Action {
    type = ActionTypes.GET_FEATURED_PRODUCT_LIST_FAIL;

    constructor(public payload: any) {
    }
}
/* get page list action*/

export class GetPageList implements Action {
    type = ActionTypes.GET_PAGE_LIST;

    constructor(public payload: FeaturedProductModel) {
    }
}

export class GetPageListSuccess implements Action {
    type = ActionTypes.GET_PAGE_LIST_SUCCESS;

    constructor(public payload: any) {
    }
}

export class GetPageListFail implements Action {
    type = ActionTypes.GET_PAGE_LIST_FAIL;

    constructor(public payload: any) {
    }
}
/* get settings action*/

export class GetSettings implements Action {
    type = ActionTypes.GET_SETTINGS_ACTION;

    constructor(public payload = null) {
    }
}

export class GetSettingsSuccess implements Action {
    type = ActionTypes.GET_SETTINGS_SUCCESS_ACTION;

    constructor(public payload: any) {
    }
}

export class GetSettingsFail implements Action {
    type = ActionTypes.GET_SETTINGS_FAIL_ACTION;

    constructor(public payload: any) {
    }
}
/* do contact us action*/

export class DoContactUsAction implements Action {
    type = ActionTypes.DO_CONTACT_US_ACTION;

    constructor(public payload: ContactUsRequestModel) {
    }
}

export class DoContactUsActionSuccess implements Action {
    type = ActionTypes.DO_CONTACT_US_SUCCESS_ACTION;

    constructor(public payload: any) {
    }
}

export class DoContactUsActionFail implements Action {
    type = ActionTypes.DO_CONTACT_US_FAIL_ACTION;

    constructor(public payload: any) {
    }
}
/* get page detail action*/

export class GetPageDetails implements Action {
    type = ActionTypes.GET_PAGE_DETAIL;

    constructor(public payload: ContactUsRequestModel) {
    }
}

export class GetPageDetailsSuccess implements Action {
    type = ActionTypes.GET_PAGE_DETAIL_SUCCESS;

    constructor(public payload: any) {
    }
}

export class GetPageDetailsFail implements Action {
    type = ActionTypes.GET_PAGE_DETAIL_FAIL;

    constructor(public payload: any) {
    }
}
/* get country list action*/

export class GetCountryList implements Action {
    type = ActionTypes.GET_COUNTRY_LIST;

    constructor(public payload: any) {
    }
}

export class GetCountryListSuccess implements Action {
    type = ActionTypes.GET_COUNTRY_LIST_SUCCESS;

    constructor(public payload: any) {
    }
}
export class GetCountryListFail implements Action {
    type = ActionTypes.GET_COUNTRY_LIST_FAIL;

    constructor(public payload: any) {
    }
}
export type Actions
    = GetProductList|
    GetProductListSuccess|
    GetProductListFail|
    GetProductCount|
    GetProductCountSuccess|
    GetProductCountFail|

    GetCategoryList|
    GetCategoryListSuccess|
    GetCategoryListFail|

    GetRelatedProductList|
    RelatedProductListSuccess|
    RelatedProductListFail|
    GetManufacturerList|
    ManufacturerListSuccess|
    ManufacturerListtFail|
    GetProductDetail|
    GetProductDetailSuccess|
    GetProductDetailFail|
    GetBannerList |
    GetBannerListSuccess |
    GetBannaerListFail |
    GetBannerListCount |
    GetBannerListCountSuccess |
    GetBannaerListCountFail|

    GetFeaturedProductList|
    GetFeaturedProductListSuccess|
    GetFeaturedProductListFail|

    GetPageList|
    GetPageListSuccess|
    GetPageListFail|

    DoContactUsAction|
    DoContactUsActionSuccess|
    DoContactUsActionFail;




