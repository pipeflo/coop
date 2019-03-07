/*
 * spurtcommerce API
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import { IsNotEmpty  } from 'class-validator';

export class UpdateBanner {

    @IsNotEmpty()
    public bannerId: number;

    @IsNotEmpty()
    public title: string;

    public content: string;

    public image: string;

    public link: string;

    public position: number;
}
