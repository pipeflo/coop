/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, Input, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {ConfigService} from "../../../../core/service/config.service";

@Component({
    selector: 'app-brands-carousel',
    templateUrl: './brands-carousel.component.html',
    styleUrls: ['./brands-carousel.component.scss']
})
export class BrandsCarouselComponent implements OnInit {

    @Input('brands') brands: Array<any> = [];
    public config: SwiperConfigInterface = {};
    public imagePath: string;

    constructor(private configService: ConfigService) {
    }

    ngOnInit() {
        this.imagePath = this.configService.get('resize').imageUrl;
    }

    ngAfterViewInit() {
        this.config = {
            slidesPerView: 7,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: true,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },
            speed: 500,
            effect: "slide",
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                480: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 3,
                },
                960: {
                    slidesPerView: 4,
                },
                1280: {
                    slidesPerView: 5,
                },
                1500: {
                    slidesPerView: 6,
                }
            }
        };
    }

}