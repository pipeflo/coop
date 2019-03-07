/*
 * spurtcommerce
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {SwiperConfigInterface, SwiperDirective} from 'ngx-swiper-wrapper';
import {emailValidator} from '../../../theme/utils/app-validators';
import {ProductZoomComponent} from './product-zoom/product-zoom.component';
import {ListsSandbox} from "../../../../core/lists/lists.sandbox";
import {ConfigService} from "../../../../core/service/config.service";
import {Subscription} from "rxjs/Rx";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
    @ViewChild('zoomViewer') zoomViewer;
    @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
    public config: SwiperConfigInterface = {};
    public product: any;
    public image: any;
    public zoomImage: any;
    public relatedProducts: Array<any>;
    public imagePath: string;
    private sub: any;
    private id: any;
    private subscriptions: Array<Subscription> = [];

    constructor(private activatedRoute: ActivatedRoute, public dialog: MatDialog, public formBuilder: FormBuilder, public productDetail: ListsSandbox, private configService: ConfigService) {
    }

    ngOnInit() {
        this.imagePath = this.configService.get('resize').imageUrl;
        // subscribe route params and trigger selected product detail, related products
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
            this.getProductdetail();
            this.getRelatedProducts();
        });
    }

    getRelatedProducts() {
        let params: any = {};
        params.productId = this.id;
        this.productDetail.getRelatedProducts(params);
    }

    getProductdetail() {
        let params: any = {};
        params.id = this.id;
        this.productDetail.getProductDetails(params);
        this.subscriptions.push(this.productDetail.productDetails$.subscribe(detail => {
            if (detail && detail.productImage.length > 0) {
                this.image = this.imagePath + '?width=390&height=390&path=' +
                    detail.productImage[0].containerName + '&name=' + detail.productImage[0].image;
                this.zoomImage = this.imagePath + '?width=660&height=660&path=' +
                    detail.productImage[0].containerName + '&name=' + detail.productImage[0].image;
                setTimeout(() => {
                    this.config.observer = true;
                });
            }
        }));
    }

    ngAfterViewInit() {
        this.config = {
            observer: false,
            slidesPerView: 4,
            spaceBetween: 10,
            keyboard: true,
            navigation: true,
            pagination: false,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                480: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 3,
                }
            }
        };
    }


    public selectImage(image) {
        console.log('imagessssssssss', image);
        this.image = this.imagePath + '?width=390&height=3900&path=' + image.containerName + '&name=' + image.image;
        this.zoomImage = this.imagePath + '?width=660&height=660&path=' + image.containerName + '&name=' + image.image;
    }

    public onMouseMove(e) {
        if (window.innerWidth >= 1280) {
            var image, offsetX, offsetY, x, y, zoomer;
            image = e.currentTarget;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            x = offsetX / image.offsetWidth * 100;
            y = offsetY / image.offsetHeight * 100;
            zoomer = this.zoomViewer.nativeElement.children[0];
            if (zoomer) {
                zoomer.style.backgroundPosition = x + '% ' + y + '%';
                zoomer.style.display = "block";
                zoomer.style.height = image.height + 'px';
                zoomer.style.width = image.width + 'px';
            }
        }
    }

    public onMouseLeave(event) {
        this.zoomViewer.nativeElement.children[0].style.display = "none";
    }

    public openZoomViewer() {
        this.dialog.open(ProductZoomComponent, {
            data: this.zoomImage,
            panelClass: 'zoom-dialog'
        });
    }

    // unsubscribe subscribed events while destroy the page
    ngOnDestroy() {
        this.sub.unsubscribe();
        this.subscriptions.forEach(each => {
            each.unsubscribe();
        });
    }
}