/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {ToastrManager} from "ng6-toastr-notifications";
import * as editprofileActions from './action/editprofile.action';

import {Subscription} from "rxjs/index";
import * as store from '../../../app.state.interface';
import {Router} from "@angular/router";
import { EditprofileForm} from "./models/editprofile.model";
import {
    getEditProfile, getEditProfileRequestFailed, getEditProfileRequestLoaded,
    getEditProfileRequestLoading, getEditProfileResponse
} from "./reducer/editprofile.selector";

@Injectable()
export class EditprofileSandbox {

  public getEditProfile$ = this.appState.select(getEditProfile);
  public getEditProfileRespons$ = this.appState.select(getEditProfileResponse);
  public getEditProfileRequestLoading$ = this.appState.select(getEditProfileRequestLoading);
  public getEditProfileRequestLoaded$ = this.appState.select(getEditProfileRequestLoaded);
  public getEditProfileRequestFailed$ = this.appState.select(getEditProfileRequestFailed);


  private subscriptions:Array<Subscription> = [];

  constructor(protected appState:Store<store.AppState>, private router:Router, private toastr:ToastrManager) {

    this.subscribe();
  }

  // ToastrManager Notification
  public showSuccess(msg) {
    this.toastr.successToastr(msg, 'Success!');
  }

  public showFailed(msg) {
    this.toastr.errorToastr(msg, 'Failed!');
  }

  public Editprofile(value) {
    console.log('psw');
    this.appState.dispatch(new editprofileActions.DoEditprofileAction(new EditprofileForm(value)));
  }
  subscribe() {

    this.getEditProfile$.subscribe(data=>{

      if(data)
      {
        if(data.user)
        {
            if(data.user.status == 1)
            {
              console.log('data',data.user);

                this.router.navigate(['/dashboard']);
            }
        }

      }

    });

  }


}















