/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
// components
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { CONTAINERS } from "./common/index";
import { DetailPageComponent } from "./pages/detail-page/detail-page.component";
import { AuthGuard } from "../core/service/auth.guard";

export const routes: Routes = [
  {
    path: "",
    component: CONTAINERS.LayoutContainer,
    children: [
      {
        path: "",
        loadChildren: "./pages/home/home.module#HomeModule"
      },
      {
        path: "account",
        canActivate: [AuthGuard],
        loadChildren: "./pages/account/account.module#AccountModule",
        data: {
          urls: [{ title: "Account Settings", url: "" }]
        }
      },
      {
        path: "wishlist",
        canActivate: [AuthGuard],
        loadChildren: "./pages/wishlist/wishlist.module#WishlistModule",
        data: {
          urls: [{ title: "Wishlist", url: "" }]
        }
      },
      {
        path: "cart",
        loadChildren: "./pages/cart/cart.module#CartModule",
        data: {
          urls: [{ title: "Cart", url: "" }]
        }
      },
      {
        path: "checkout",
        canActivate: [AuthGuard],
        loadChildren: "./pages/checkout/checkout.module#CheckoutModule",
        data: {
          urls: [{ title: "Checkout", url: "" }]
        }
      },
      {
        path: "contact",
        loadChildren: "./pages/contact/contact.module#ContactModule",
        data: {
          urls: [{ title: "Contact", url: "" }]
        }
      },
      {
        path: "sign-in",
        loadChildren: "./pages/sign-in/sign-in.module#SignInModule",
        canActivate: [AuthGuard],
        data: {
          urls: [{ title: "Sign In", url: "" }]
        }
      },
      {
        path: "page-detail/:id",
        component: DetailPageComponent,
        data: {
          urls: [{ title: "page Detail", url: "" }]
        }
      },
      {
        path: "products",
        loadChildren: "./pages/products/products.module#ProductsModule",
        data: {
          urls: [{ title: "All Products", url: "" }]
        }
      },
      {
        path: "products/:id",
        loadChildren: "./pages/products/products.module#ProductsModule",
        data: {
          urls: [{ title: "All Products", url: "" }]
        }
      }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule {}
