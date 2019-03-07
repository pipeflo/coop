/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import {Injectable} from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
        console.log(state.url);
        return this.checkLogin(state.url);
    }

    checkLogin(url: string): Promise<boolean> | boolean {
        const currentUser = JSON.parse(localStorage.getItem('userdetail'));
        console.log(currentUser, 'guard');
        if (currentUser) {
            if (url === '/auth/login' || url === '/auth/forgot-password') {
              // Navigate to the login page with extras
              this.router.navigate(['/dashboard']);
              return false;
            }
            return true;
        } else {
          if (url === '/auth/login' || url === '/auth/forgot-password') {
            return true;
          }
        }
        // Navigate to the login page with extras
        this.router.navigate(['/auth/login']);
        return false;
    }

}
