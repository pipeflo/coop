/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
// action
import * as actions from '../product-action/product.action';
// state
import {ProductState, ProductStateRecord} from './product.state';
// model
import {ProductListResponseModel} from '../product-model/product-list-response.model';
import {DetailResponseModel} from '../product-model/detail-response.model';
import {ProductAddResponseModel} from '../product-model/product-add-response.model';

export const initialState: ProductState = new ProductStateRecord() as ProductState;

export function reducer(state = initialState, {type, payload}: any): ProductState {
    if (!type) {
        return state;
    }

    switch (type) {
        // product detail action
        case actions.ActionTypes.GET_PRODUCT_DETAIL: {
            return Object.assign({}, state, {
                detailLoading: true,
                detailLoaded: false,
                detailFailed: false,
            });
        }
        case actions.ActionTypes.GET_PRODUCT_DETAIL_SUCCESS: {
            console.log('payload details', payload);
            const detailModel = payload.data.map(_products => {
                const tempDetailModel = new DetailResponseModel(_products);
                return tempDetailModel;
            });
            return Object.assign({}, state, {
                detailLoading: false,
                detailLoaded: true,
                detailFailed: false,
                productDetail: detailModel
            });
        }
        case actions.ActionTypes.GET_PRODUCT_DETAIL_FAIL: {
            return Object.assign({}, initialState, {
                detailLoading: false,
                detailLoaded: false,
                detailFailed: true,
            });
        }


        // product add action
        case actions.ActionTypes.DO_PRODUCT_ADD: {
            return Object.assign({}, state, {
                addLoading: true,
                addLoaded: false,
                addFailed: false,
            });
        }
        case actions.ActionTypes.DO_PRODUCT_ADD_SUCCESS: {
            let addedProduct = new ProductAddResponseModel(payload.data);
            return Object.assign({}, state, {
                addLoading: false,
                addLoaded: true,
                addFailed: false,
                addProductDetail: addedProduct,
                productAdded: payload
            });
        }
        case actions.ActionTypes.DO_PRODUCT_ADD_FAIL: {
            return Object.assign({}, initialState, {
                addLoading: false,
                addLoaded: false,
                addFailed: true,
            });
        }
        // product list action
        case actions.ActionTypes.GET_PRODUCT_LIST: {
            return Object.assign({}, state, {
                listLoading: true,
                listLoaded: false,
                listFailed: false,
            });
        }
        case actions.ActionTypes.GET_PRODUCT_LIST_SUCCESS: {
            console.log('list payload', payload);
            const productModel = payload.data.map(_products => {
                const tempProductModel = new ProductListResponseModel(_products);
                return tempProductModel;
            });
            return Object.assign({}, state, {
                listLoading: false,
                listLoaded: true,
                listFailed: false,
                productList: productModel
            });
        }
        case actions.ActionTypes.GET_PRODUCT_LIST_FAIL: {
            return Object.assign({}, initialState, {
                listLoading: false,
                listLoaded: false,
                listFailed: true,
            });
        }
        // product count action
        case actions.ActionTypes.GET_PRODUCT_COUNT: {
            return Object.assign({}, state, {
                countLoading: true,
                countLoaded: false,
                countFailed: false,
            });
        }
        case actions.ActionTypes.GET_PRODUCT_COUNT_SUCCESS: {
            console.log('count pay', payload);

            return Object.assign({}, state, {
                countLoading: false,
                countLoaded: true,
                countFailed: false,
                productCount: payload.data

            });
        }
        case actions.ActionTypes.GET_PRODUCT_COUNT_FAIL: {
            return Object.assign({}, initialState, {
                countLoading: false,
                countLoaded: true,
                countFailed: true
            });
        }
        // product delete action
        case actions.ActionTypes.DO_PRODUCT_DELETE: {
            return Object.assign({}, state, {
                deleteLoading: true,
                deleteLoaded: false,
                deleteFailed: false,
            });
        }
        case actions.ActionTypes.DO_PRODUCT_DELETE_SUCCESS: {
            console.log('payload', payload);
            return Object.assign({}, state, {
                deleteLoading: false,
                deleteLoaded: true,
                deleteFailed: false,
                productDelete: payload
            });
        }
        case actions.ActionTypes.DO_PRODUCT_DELETE_FAIL: {
            console.log('prod delete fail', payload);
            return Object.assign({}, state, {
                deleteLoading: false,
                deleteLoaded: false,
                deleteFailed: true,
                productDelete: payload
            });
        }
        // product update action
        case actions.ActionTypes.DO_PRODUCT_UPDATE: {
            return Object.assign({}, state, {
                updateLoading: true,
                updateLoaded: false,
                updateFailed: false,
            });
        }
        case actions.ActionTypes.DO_PRODUCT_UPDATE_SUCCESS: {
            console.log('payload', payload);
            return Object.assign({}, state, {
                updateLoading: false,
                updateLoaded: true,
                updateFailed: false,
                productUpdate: payload
            });
        }
        case actions.ActionTypes.DO_PRODUCT_UPDATE_FAIL: {
            return Object.assign({}, initialState, {
                updateLoading: false,
                updateLoaded: false,
                updateFailed: true,
            });
        }
        // isfeature action
        case actions.ActionTypes.DO_IS_FEATURE_DETAIL: {
            console.log('paylaod', payload);
            return Object.assign({}, state, {});
        }
        case actions.ActionTypes.DO_IS_FEATURE_DETAIL_SUCCESS: {
            console.log('paylaod', payload);
            return Object.assign({}, state, {});
        }
        case actions.ActionTypes.DO_IS_FEATURE_DETAIL_FAIL: {
            console.log('paylaod', payload);
            return Object.assign({}, state, {});
        }
        default: {
            return state;
        }
    }
}

// product list action
export const getProductList = (state: ProductState) => state.productList;
export const getProductListLoading = (state: ProductState) => state.listLoading;
export const getProductListLoaded = (state: ProductState) => state.listLoaded;
export const getProductListFailed = (state: ProductState) => state.listFailed;

// product count action
export const getProductCount = (state: ProductState) => state.productCount;
export const getProductCountLoading = (state: ProductState) => state.countLoading;
export const getProductCountLoaded = (state: ProductState) => state.countLoaded;
export const getProductCountFailed = (state: ProductState) => state.countFailed;

// product delete action
export const getProductDelete = (state: ProductState) => state.productDelete;
export const getProductDeleteLoading = (state: ProductState) => state.deleteLoading;
export const getProductDeleteLoaded = (state: ProductState) => state.deleteLoaded;
export const getProductDeleteFailed = (state: ProductState) => state.deleteFailed;

// product add action
export const getProductAdd = (state: ProductState) => state.productAdded;
export const getProductAddDetail = (state: ProductState) => state.addProductDetail;
export const getProductAddLoading = (state: ProductState) => state.addLoading;
export const getProductAddLoaded = (state: ProductState) => state.addLoaded;
export const getProductAddFailed = (state: ProductState) => state.addFailed;

// product update action
export const getProductUpdate = (state: ProductState) => state.productUpdate;
export const getProductUpdateLoading = (state: ProductState) => state.updateLoading;
export const getProductUpdateLoaded = (state: ProductState) => state.updateLoaded;
export const getProductUpdateFailed = (state: ProductState) => state.updateFailed;

// product detail action
export const getProductDetail = (state: ProductState) => state.productDetail;
export const getProducDetailLoading = (state: ProductState) => state.detailLoading;
export const getProductDetailLoaded = (state: ProductState) => state.detailLoaded;
export const getProductDetailFailed = (state: ProductState) => state.detailFailed;










