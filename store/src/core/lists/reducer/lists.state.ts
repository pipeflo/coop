/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Map, Record} from 'immutable';
import {BannerListResponseModel} from '../models/banner-list-response.model';
import {FeaturedProductResponseModel} from '../models/featured-product-response.model';
import {ProductsResponseModel} from '../models/products-response.model';
import {CategoryResponseModel} from '../models/category-response.model';
import {ManufacturerResponseModel} from '../models/manufacturer-response.model';
import {ProductDetailResponseModel} from '../models/product-detail-response.model';
import {PagelistResponseModel} from '../models/pagelist-response.model';
import {SettingResponseModel} from '../models/setting-response.model';
import {CountryResponseModel} from '../models/country-response.model';

export interface ListsState extends Map<string, any> {
    products: Array<ProductsResponseModel>;
    productCount: number;
    category: Array<CategoryResponseModel>;
    relatedProducts: any;
    manufacturer: Array<ManufacturerResponseModel>;
    productDetail: ProductDetailResponseModel;

    productLoading: boolean;
    productLoaded: boolean;
    productFailed: boolean;

    bannerList: Array<BannerListResponseModel>;
    bannerLoading: boolean;
    bannerLoaded: boolean;
    bannerFailed: boolean;

    bannerCount: any;
    countLoading: boolean;
    countLoaded: boolean;
    countFailed: boolean;

    featuredList: Array<FeaturedProductResponseModel>;
    featuredListLoading: boolean;
    featuredListLoaded: boolean;
    featuredListFailed: boolean;

    relatedProductLoading: boolean;
    relatedProductLoaded: boolean;
    relatedProductFailed: boolean;

    pageList: Array<PagelistResponseModel>;
    pageListLoading: boolean;
    pageListLoaded: boolean;
    pageListFailed: boolean;
    settingDetail: SettingResponseModel;

    contactUsLoading: boolean;
    contactusLoaded: boolean;
    contactusFailed: boolean;
    contactDetail: any;

    pageDetailLoading: boolean;
    pageDetailLoaded: boolean;
    pageDetailFailed: boolean;
    pageDetail: any;

    manufacturerLoading: boolean;
    manufacturerLoaded: boolean;
    manufacturerFailed: boolean;

    productDetailLoading: boolean;
    productDetailLoaded: boolean;
    productDetailFailed: boolean;

    countryList: Array<CountryResponseModel>;
    countryLoading: boolean;
    countryLoaded: boolean;
    countryFailed: boolean;
}

export const listsRecord = Record({
    products: [],
    productCount: 0,
    category: [],
    relatedProducts: [],
    manufacturer: [],
    productDetail: {},
    productLoading: false,
    productLoaded: false,
    productFailed: false,

    bannerList: [],
    bannerLoading: false,
    bannerLoaded: false,
    bannerFailed: false,

    bannerCount: 0,
    countLoading: false,
    countLoaded: false,
    countFailed: false,

    featuredListLoading: false,
    featuredListLoaded: false,
    featuredListFailed: false,

    relatedProductLoading: false,
    relatedProductLoaded: false,
    relatedProductFailed: false,

    pageList: [],
    pageListLoading: false,
    pageListLoaded: false,
    pageListFailed: false,
    settingDetail: [],

    contactUsLoading: false,
    contactusLoaded: false,
    contactusFailed: false,
    contactDetail: {},

    pageDetailLoading: false,
    pageDetailLoaded: false,
    pageDetailFailed: false,
    pageDetail: {},

    manufacturerLoading: false,
    manufacturerLoaded: false,
    manufacturerFailed: false,

    productDetailLoading: false,
    productDetailLoaded: false,
    productDetailFailed: false,

    countryList: [],
    countryLoading: false,
    countryLoaded: false,
    countryFailed: false,
});
