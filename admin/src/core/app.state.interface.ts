/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

// This should hold the AppState interface
// Ideally importing all the substate for the application
import {ActionReducer, combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {AuthState} from './admin/auth/reducer/auth.state';
import {CommonState} from './admin/logout/reducer/common.state';
import {Media} from './admin/catalog/media/reducer/media.state';
import {CategoriesState} from './admin/catalog/category/reducer/categories.state';
import {ChangePasswordState} from './admin/profile/changepassword/changepassword-store/changepassword.state';
import {CustomerState} from './admin/Customers/customers/customer-reducer/customer.state';
import {OrderStatusState} from './admin/settings/localizations/orderstatus/orderstatus-reducer/orderstatus.state';
import {CountryState} from './admin/settings/localizations/country/country-reducer/country.state';
import {ZoneState} from './admin/settings/localizations/zone/zone-reducer/zone.state';
import {RoleState} from './admin/settings/role/role-reducer/role.state';
import {PageState} from './admin/cms/pages/pages-reducer/page.state';
import {UserState} from './admin/settings/user/user-reducer/user.state';
import {BannerState} from './admin/cms/banners/banner-store/banner.state';
import {BrandState} from './admin/catalog/brand/reducer/brand.state';
import {LanguageState} from './admin/settings/localizations/languages/languages-reducer/languages.state';
import {StockState} from './admin/settings/localizations/stockStatus/stock-reducer/stock.state';
import {SalesOrderState} from './admin/sales/orders/orders-reducer/orders.state';
import {EditprofileState} from './admin/profile/editprofile/store/editprofile.state';
import {ProductState} from './admin/catalog/product/product-reducer/product.state';
import {CurrencyState} from './admin/settings/localizations/currency/currency-reducer/currency.state';
import { DashboardState } from './admin/dashboard/reducer/dashboard.state';
import {GeneralsettingState} from './admin/settings/generalsetting/generalsetting-reducer/generalsetting.state';
import {SocialState} from './admin/settings/siteSettings/social/social-reducer/social.state';
import {SeosettingState} from './admin/settings/siteSettings/seo/seo-reducer/seo-state';
import {CatalogLayoutState} from './admin/catalog/layout/reducer/layout.state';
import {CustomerLayoutState} from './admin/Customers/layout/reducer/layout.state';
import {SalesLayoutState} from './admin/sales/layout/reducer/layout.state';

/**
 *
 *
 * @export
 * @interface AppState
 */
export interface AppState {
  auth: AuthState;
  common: CommonState;
  media: Media;
  categories: CategoriesState;
  product: ProductState;
  changepassword: ChangePasswordState;
  customer: CustomerState;
  orderStatus: OrderStatusState;
  country: CountryState;
  zone: ZoneState;
  role: RoleState;
  pages: PageState;
  user: UserState;
  banner: BannerState;
  brand: BrandState;
  language: LanguageState;
  stockstatus: StockState;
  salesorder: SalesOrderState;
  editprofile: EditprofileState;
  currency: CurrencyState;
  dashboard: DashboardState;
  generalsetting: GeneralsettingState;
  social: SocialState;
  seosetting: SeosettingState;
  catalogLayout: CatalogLayoutState;
  customerLayout: CustomerLayoutState;
  salesLayout: SalesLayoutState;

}


