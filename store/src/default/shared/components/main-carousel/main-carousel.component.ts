/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, OnInit, Input} from '@angular/core';
import {SwiperConfigInterface, SwiperPaginationInterface} from 'ngx-swiper-wrapper';
import {ConfigService} from '../../../../core/service/config.service';

@Component({
    selector: 'app-main-carousel',
    templateUrl: './main-carousel.component.html',
    styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit {
    @Input('slides') slides: Array<any> = [];

    public config: SwiperConfigInterface = {};
    public imagePath: string;
    private pagination: SwiperPaginationInterface = {
        el: '.swiper-pagination',
        clickable: true
    };

    constructor(private configService: ConfigService) {
    }

    ngOnInit() {
        this.imagePath = this.configService.get('resize').imageUrl;
    }

    ngAfterViewInit() {
        this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: this.pagination,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },
            speed: 500,
            effect: 'slide'
        };
    }

}