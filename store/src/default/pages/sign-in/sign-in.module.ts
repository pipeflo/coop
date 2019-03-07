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
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { SignInComponent } from './sign-in.component';
import {ComponentsModule} from '../../shared/components/index';

// store
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from '../../../core/auth/effects/auth.effect';
import {AuthApiService} from '../../../core/auth/auth.service';
import {AuthSandbox} from '../../../core/auth/auth.sandbox';


export const routes = [
  { path: '', component: SignInComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
      ComponentsModule,
      EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [
    SignInComponent
  ],
    providers: [AuthApiService, AuthSandbox]
})
export class SignInModule { }
