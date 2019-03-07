/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { WishlistComponent } from './wishlist.component';
import {ComponentsModule} from '../../shared/components/index';
// store
import {EffectsModule} from '@ngrx/effects';
import {WishlistEffect} from '../../../core/wishlist/effects/wishlist.effect';
import {WishlistSandbox} from '../../../core/wishlist/wishlist.sandbox';
import {WishlistService} from '../../../core/wishlist/wishlist.service';


export const routes = [
  { path: '', component: WishlistComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
      ComponentsModule,
      EffectsModule.forFeature([WishlistEffect]),

  ],
  declarations: [
    WishlistComponent
  ],
    providers: [WishlistSandbox, WishlistService]
})
export class WishlistModule { }
