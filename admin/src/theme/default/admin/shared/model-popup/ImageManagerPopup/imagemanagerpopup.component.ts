/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Subscription} from 'rxjs/index';
import {MediaSandbox} from '../../../../../../core/admin/catalog/media/media.sandbox';
import {ConfigService} from '../../../../../../core/admin/service/config.service';


@Component({
    selector: 'app-imagemanagerpopup',
    templateUrl: './imagemanagerpopup.html',
    styleUrls: ['./imagemanagerpopup.css'],
})
export class ImagemanagerpopupComponent implements OnInit, OnDestroy {

    @ViewChild('filePath') filePath: ElementRef;
    // createFolder event
    public textValue: any;
    // image
    public imageUrls: string;
    // openFolder event
    private currentFolder: string = '';
    // selectFile event
    private selectedFiles: any;
    // uploadImageAction event
    private selecetdFile: any;
    // ngOnDestroy event
    private subscriptions: Array<Subscription> = [];

    constructor(public modal: NgbActiveModal,
                public mediaSandbox: MediaSandbox,
                public configService: ConfigService) {
        this.regSubscribeEvents();
    }

    // Initially calls getBucketList event with empty param.
    /**
     * Handles ngOnInit,Initially calls getBucketList event with empty param.
     *
     *   and assigning  configService url
     */
    ngOnInit() {
        this.getBucketList('');
        this.imageUrls = this.configService.get('resize').imageUrl;

        // this.imageUrls = this.configService.get('withoutresize').imageUrls;
    }

    /**
     * Handles form 'getBucketList' event. Calls sandbox bucketListApi.
     *
     * @param foldername create folder  event
     * @param limit as default '100'.
     */

    public getBucketList(foldername: string = '') {
        let params: any = {};
        params.folderName = foldername;
        params.limit = 100;
        this.mediaSandbox.bucketListApi(params);

    }

    /**
     * Handles openFolder event .And calls getBucketList event
     *
     * @param folder create folder  by clicking the folder event
     */


    public openFolder(folder) {
        this.currentFolder = folder;
        this.getBucketList(folder);

    }

    /**
     * Handles enhanceName event .
     *
     * @param file enhanceName the data by spliting by (/).
     */


    public enhanceName(file) {
        let newValue = file.split('/');
        return newValue[newValue.length - 1];

    }

    /**
     * Handles removeSlash event .
     *
     * @param data removes  the data by spliting by (/).
     */

    public removeSlash(data) {
        let newValue = data.split('/');
        return newValue[newValue.length - 2];
    }

    /**
     * Handles goBack event .
     *
     * @param path removes  the data by spliting by (/).
     *
     *check the conditon if it true store data in previousPath
     * else  store data in previousPath with previousPath.
     *
     * calls the getBucketList event
     */
    public goBack(path) {
        console.log('path', path);
        let previousPath: any = '';
        let tempPath = path.split('/');
        console.log('tempPath', tempPath);

        for (let i = 0; i < (tempPath.length - 2); i++) {
            if (i === 0) {
                previousPath = tempPath[i] + '/';
                console.log('currentfolder', previousPath);
            } else if (i > 0) {
                previousPath = previousPath + tempPath[i];
                console.log('currentfolder', previousPath);
            }
        }
        this.currentFolder = previousPath;
        console.log('currentfolder', previousPath)

        this.getBucketList(previousPath);
    }

    /**
     * Handles deleteFile event .calls mediaSandbox deleteFile .
     *
     * @param file.
     */

    public deleteFile(file) {
        let params: any = {};
        params.fileName = file;
        this.mediaSandbox.deleteFile(params);
    }

    /**
     * Handles createFolder event .calls mediaSandbox getbuckcreatefolder .
     *
     * @param param.
     *
     * According to the condition it store the values in param.
     */
    public createFolder() {
        let param: any = {};
        if (this.currentFolder === '') {
            param.folderName = this.textValue + '/';

        } else {
            param.folderName = this.currentFolder + this.textValue + '/';
        }

        this.mediaSandbox.getbuckcreatefolder(param);
    }

    /**
     * Handles uploadImageAction event .calls  convertBase64 event.
     *
     * @param event.
     *
     * store the event in selecetdFile variable.
     */
    public uploadImageAction(event) {
        this.selecetdFile = event.target;
        this.convertBase64(this.selecetdFile);
    }

    /**
     * Handles uploadImage event .calls  convertBase64 event.
     */
    public uploadImage() {
        let el: HTMLElement = this.filePath.nativeElement as HTMLElement;
        el.click();
    }

    /**
     * Handles selectFile event .split the data by (/) and store it in a variable.
     *
     * then calls close event.
     */
    public selectFile(file) {
        let folderPath = '';
        let tempData = file.split('/');
        let tempImage = tempData[tempData.length - 1];
        if (tempData.length > 1) {
            tempData.pop();
            folderPath = tempData.join('/') + '/';
        }
        let param: any = {};
        param.containerName = folderPath;
        param.image = tempImage;
        this.selectedFiles = param;
        this.close();
    }

    // Handles close event to close the image manager popup along with arguments
    close() {

        if ((this.selectedFiles !== ' ') && (this.selectedFiles !== undefined)) {
            this.modal.close(this.selectedFiles);
        } else {

            this.modal.close();
        }

    }

    // unsubscribing  all the subscribe event.
    ngOnDestroy() {
        this.subscriptions.forEach(each => {
            each.unsubscribe();
        });
    }

    /**
     * Handles convertBase64 event .converts the data into base 64 format.
     *
     * calls mediaSandbox getbuckupload
     *
     * @param inputValue from  uploadImageAction event.
     *
     * then calls close event.
     */
    private convertBase64(inputValue: any): void {
        let file: File = inputValue.files[0];
        let myReader: FileReader = new FileReader();
        myReader.onloadend = (e) => {
            let params: any = {};
            params.image = myReader.result;
            params.path = this.currentFolder;
            console.log('currentfolder', this.currentFolder)
            this.mediaSandbox.getbuckupload(params);
        }
        myReader.readAsDataURL(file);
    }

    /**
     * Handles regSubscribeEvents event .
     *
     * subscribe mediaSandbox getMediaCreatefold$
     *
     * subscribe mediaSandbox getMediaUpload$
     *
     * If the respose is succesfull then call getBucketList event.
     */
    private regSubscribeEvents() {
        this.subscriptions.push(this.mediaSandbox.getMediaCreatefold$.subscribe(create => {
            if (create && create.status === 1) {
                this.getBucketList(this.currentFolder);
            }
        }));
        this.subscriptions.push(this.mediaSandbox.getMediaUpload$.subscribe(upload => {
            if (upload && upload.status === 1) {
                this.getBucketList(this.currentFolder);
            }
        }));
    }
    /**
     * Handles enhanceName event .
     *
     * @param file enhanceName the data by spliting by (/).
     */
    public getImage(image) {
        let folderPath = '/';
        const tempData = image.split('/');
        const tempImage = tempData[tempData.length - 1];
        if (tempData.length > 1) {
            tempData.pop();
            folderPath = tempData.join('/') + '/';
        }
        return this.imageUrls + '?width=60&height=60&path=' + folderPath + '&name=' + tempImage;
    }
}
