/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import {Component, OnInit, ElementRef, ViewChild, OnDestroy} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {emailValidator, matchingPasswords} from '../../../theme/utils/app-validators';
import {ConfigService} from '../../../../core/service/config.service';
import {CommonSandbox} from '../../../../core/common/common.sandbox';
import {AccountSandbox} from '../../../../core/account/account.sandbox';
import {ListsSandbox} from '../../../../core/lists/lists.sandbox';
import {Subscription} from 'rxjs/Rx';


@Component({
    selector: 'app-information',
    templateUrl: './information.component.html',
    styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit, OnDestroy {
    public infoForm: FormGroup;
    public passwordForm: FormGroup;
    public imageUrl: any;
    private userImage: any;
    public imagePath: string;
    private subscriptions: Array<Subscription> = [];

    @ViewChild('filePath') filePath: ElementRef;

    constructor(public formBuilder: FormBuilder, public configService: ConfigService,
                public snackBar: MatSnackBar, public commonSandbox: CommonSandbox,
                public listsSandbox: ListsSandbox,
                public accountsandbox: AccountSandbox) {
    }

    ngOnInit() {
        this.imagePath = this.configService.get('resize').imageUrl;
        this.imageUrl = 'assets/images/avatars/no-image-icon-6.png';
        this.initInfoForm();
        this.initPasswordForm();
        this.setProfile();
    }
    // build a form for info  by gouping the form control
    initInfoForm() {
        this.infoForm = this.formBuilder.group({
            'firstName': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            'lastName': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            'email': ['', Validators.compose([Validators.required, emailValidator])],
            'password': [''],
            'address': ['', Validators.compose([Validators.required])],
            'country': ['', Validators.compose([Validators.required])],
            'city': ['', Validators.compose([Validators.required])],
            'pincode': ['', Validators.compose([Validators.required])],
            'phoneNumber': [''],
        });
    }
    // build a form for change password  by gouping the form control

    initPasswordForm() {
        this.passwordForm = this.formBuilder.group({
                'currentPassword': ['', Validators.required],
                'newPassword': ['', Validators.required],
            }
        );
    }
    // set the user details to the form by fetching the profile details from sandbox
    setProfile() {
        this.subscriptions.push(this.commonSandbox.getProfile$.subscribe(profile => {
            if (profile) {
                this.infoForm.controls['firstName'].setValue(profile.firstName);
                this.infoForm.controls['lastName'].setValue(profile.lastName);
                this.infoForm.controls['email'].setValue(profile.email);
                this.infoForm.controls['address'].setValue(profile.address);
                this.infoForm.controls['country'].setValue(profile.countryId);
                this.infoForm.controls['city'].setValue(profile.city);
                this.infoForm.controls['pincode'].setValue(profile.pincode);
                this.infoForm.controls['phoneNumber'].setValue(profile.mobileNumber);
                this.imageUrl = this.imagePath + '?width=60&height=60&name=' + profile.avatar + '&path=' + profile.avatarPath;
            }
        }));
    }
    /**
     * upload new user image
     *
     * @param el refer the HTMLElement filePath
     * it will activate the click function of el
     */
    uploadButtonClick() {
        let el: HTMLElement = this.filePath.nativeElement as HTMLElement;
        el.click();
    }

    uploadChange($event): void {
        this.convertBase64($event.target);
    }
    // convert image file into Base64 format
    convertBase64(inputValue: any): void {
        var file: File = inputValue.files[0];
        var myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.imageUrl = myReader.result;
            this.userImage = myReader.result;
        }
        myReader.readAsDataURL(file);
    }
    // call edit user info functionality if the form is valid

    public onInfoFormSubmit(): void {
        if (this.infoForm.valid) {
            let params: any = this.infoForm.value;
            params.image = this.userImage;
            this.accountsandbox.doEditProfile(params);
        }
    }
    // call change password functionality if the password form is valid
    public onPasswordFormSubmit(): void {
        if (this.passwordForm.valid) {
            this.accountsandbox.doChangepassword(this.passwordForm.value);
            this.resetAllFormFields(this.passwordForm);
        }
    }
    // reset form fields and clear validation
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
    ngOnDestroy() {
        this.subscriptions.forEach(each => {
            each.unsubscribe();
        });
    }
}
