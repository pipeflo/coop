import {Component, ViewEncapsulation, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {ConfigService} from '../../../../../core/service/config.service';

@Component({
    selector: 'app-product-dialog',
    templateUrl: './product-dialog.component.html',
    styleUrls: ['./product-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProductDialogComponent implements OnInit {
    public config: SwiperConfigInterface = {};
    public imagePath: string;

    constructor(public dialogRef: MatDialogRef<ProductDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public product: any,
                private configService: ConfigService) {
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
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        };
    }

    public close(): void {
        this.dialogRef.close();
    }
}