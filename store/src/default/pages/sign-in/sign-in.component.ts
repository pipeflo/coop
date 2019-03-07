/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { emailValidator, matchingPasswords } from '../../theme/utils/app-validators';
import {AuthSandbox} from '../../../core/auth/auth.sandbox';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  forgotForm: FormGroup;
  isForgot: boolean = false;
  loginSubmitted: boolean = false;

  constructor(public formBuilder: FormBuilder, public router: Router, public snackBar: MatSnackBar, public authsandbox: AuthSandbox) { }

  ngOnInit() {
      // initialize forms by creating form groups
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
    this.forgotForm = this.formBuilder.group({
      'emailId': ['', Validators.compose([Validators.required, emailValidator])]
    });

    this.registerForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': ['', Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'confirmPassword': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'phoneNumber': ['']
    }, {validator: matchingPasswords('password', 'confirmPassword')});

  }
    /**
     * do login if the login form is valid
     *
     * it will call the login function from the sandbox
     */
  public onLoginFormSubmit():void {
      this.loginSubmitted = true;
    if (this.loginForm.valid) {
        console.log(this.loginForm.value);
        this.authsandbox.doLogin(this.loginForm.value);
        this.resetAllFormFields(this.loginForm);
    }
  }

 public onForgotFormSubmit():void {
    if (this.forgotForm.valid) {
      this.authsandbox.doRecover(this.forgotForm.value);
        this.resetAllFormFields(this.forgotForm);
    }
  }

  public onRegisterFormSubmit():void {
    if (this.registerForm.valid) {
        this.authsandbox.doRegister(this.registerForm.value);
        this.resetAllFormFields(this.registerForm);
    } else {
        console.log('form', this.registerForm);
    }
  }
    resetAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.reset();
                control.clearValidators();
                control.updateValueAndValidity();
            } else if (control instanceof FormGroup) {
                this.resetAllFormFields(control);
            }
        });
    }

}
