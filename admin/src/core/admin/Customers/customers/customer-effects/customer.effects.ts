/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import {Injectable} from "@angular/core";
import {Effect, Actions} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import * as actions from '../customer-action/customers.action';
import {catchError} from 'rxjs/internal/operators';
import {CustomersApiClientService} from '../customer.ApiClient.service';
import {CustomerFormResponseModel} from '../customer-model/customerform.response.model';
import {AddAddressListResponseForm} from '../customer-model/addAddresslistform.response.model';
import {AddAddressResponseForm} from '../customer-model/addAddressform.response.model';


@Injectable()
export class Customereffects {

    constructor(private action$: Actions, private Service: CustomersApiClientService) {
    }

        // Customer list
    @Effect()
    docatlists$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_Customers_List)
        .pipe(
            map((action: actions.DoCustomersListAction) => action.payload),
            switchMap((state) => {
                console.log(' customers effect state', state);
                return this.Service.customersList(state)
                    .pipe(
                        switchMap((customers) => [
                            new actions.DoCustomerslistSuccessAction((customers)),
                        ]),
                        catchError(error => of(new actions.DoCustomerslistFailAction(error)))
                    );
            })
        );
        // customerList Pagination
    @Effect()
    doPginationcustomers$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_PAGINATION_CUSTOMER_List)
        .pipe(
            map((action: actions.DoCustomersListAction) => action.payload),
            switchMap((state) => {
                console.log(' customers Pagination effect state', state);
                return this.Service.customersList(state)
                    .pipe(
                        switchMap((customers) => [
                            new actions.DoPaginationCustomersSuccessAction((customers)),
                        ]),
                        catchError(error => of(new actions.DoPaginationCustomersFailAction(error)))
                    );
            })
        );
        // Add customer
    @Effect()
    doADDcustomers$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_ADD_Customers_Action)
        .pipe(
            map((action: actions.DoAddCustomersListAction) => action.payload),
            switchMap((state) => {
                console.log(' customers Pagination effect state', state);
                return this.Service.addcustomer(state)
                    .pipe(
                        switchMap((customers) => [
                            new actions.DoAddCustomersListActionSuccess((customers)),
                        ]),
                        catchError(error => of(new actions.DoAddCustomersListFailAction(error)))
                    );
            })
        );
  // update Customer
    @Effect()
    doupdateCustomer$: Observable<Action> = this.action$
        .ofType (actions.ActionTypes.DO_UPDATE_CUSTOMER_ACTION)
        .pipe(
            map((action: actions.DoUpdateCustomerAction) => action.payload),
            switchMap((state) => {
                console.log('state update', state);

                return this.Service.updatecustomer(state)
                    .pipe(
                        switchMap((user) => {
                            return [
                                new actions.DoUpdateCustomerSuccess(user),

                            ];
                        }),
                        catchError(error => of(new actions.DoUpdateCustomerFail(error)))
                    );
            })
        );

    // delete customer
    @Effect()
    doCustomerDelete$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_DELETE_CUSTOMER_ACTION)
        .pipe(
            map((action: actions.DoDeleteCustomerAction) => action.payload),
            switchMap((state) => {
                console.log('state', state.customerId);
                const customerId = state.customerId;

                console.log('effect state', state.customerId);
                return this.Service.deleteCustomer(state, customerId)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoDeleteCustomerSuccess((user)),
                        ]),
                        catchError(error => of(new actions.DoDeleteCustomerFail(error)))
                    );
            })
        );

    // Add Address List
    @Effect()
    doaddaddressList$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_ADD_ADDRESS_LIST_ACTION)
        .pipe(
            map((action: actions.DoAddAddressListAction) => action.payload),
            switchMap((state) => {
                return this.Service.addAddressList(state)
                    .pipe(
                        switchMap((customers) => [
                            new actions.DoAddAddressListSuccess(((customers))),
                        ]),
                        catchError(error => of(new actions.DoAddAddressListFail(error)))
                    );
            })
        );

    // Add Address Pagination
    @Effect()
    doaddaddressListPagination$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_ADD_ADDRESS_PAGINATION_ACTION)
        .pipe(
            map((action: actions.DoAddAddressPaginationtAction) => action.payload),
            switchMap((state) => {
                console.log(' customers effect state', state);
                return this.Service.addAddressPagination(state)
                    .pipe(
                        switchMap((address) => [
                            new actions.DoAddAddressPaginationSuccess(new AddAddressListResponseForm((address))),
                        ]),
                        catchError(error => of(new actions.DoAddAddressPaginationFail(error)))
                    );
            })
        );

    // Add Address Add
    @Effect()
    doAddressAdd$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_ADD_ADDRESS_ADD_ACTION)
        .pipe(
            map((action: actions.DoAddAddressAddAction) => action.payload),
            switchMap((state) => {
                console.log(' add address add', state);
                return this.Service.addaddressAdd(state)
                    .pipe(
                        switchMap((customers) => [
                            new actions.DoAddAddressAddSuccess((customers)),
                        ]),
                        catchError(error => of(new actions.DoAddAddressAddFail(error)))
                    );
            })
        );
    // Add Address Update

    @Effect()
    doaddaddressUpadte$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_ADD_ADDRESS_UPDATE_ACTION)
        .pipe(
            map((action: actions.DoAddAddressUpdateAction) => action.payload),
            switchMap((state) => {
                console.log('state update', state);

                return this.Service.updateAddAddress(state)
                    .pipe(
                        switchMap((user) => {
                            return [
                                new actions.DoAddAddressUpdateSuccess(new AddAddressResponseForm(user)),
                            ];
                        }),
                        catchError(error => of(new actions.DoAddAddressUpdateFail(new CustomerFormResponseModel(error))))
                    );
            })
        );

    // delete customer Address
    @Effect()
    doAddAddressDelete$: Observable<Action> = this.action$
        .ofType(actions.ActionTypes.DO_ADD_ADDRESS_DELETE_ACTION)
        .pipe(
            map((action: actions.DoDeleteAddAddressAction) => action.payload),
            switchMap((state) => {
                console.log('state', state.customerId);
                const addressId = state.addressId;
                console.log('effect state', state.addressId);
                return this.Service.deleteAddAddress(state, addressId)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoDeleteAddAddressSuccess((user)),
                        ]),
                        catchError(error => of(new actions.DoDeleteAddAddressFail(error)))
                    );
            })
        );
}
