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
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {ZonelistForm} from './zone-model/zonelist.model';
import {ZoneForm} from './zone-model/zone.model';
import {Api} from '../../../providers/api/api';


@Injectable()
export class ZoneService extends Api {

    zonelistdata: any;
    private url: string = this.getBaseUrl();


    setzonelistdata(data) {
        console.log('data', data);
        this.zonelistdata = data;
    }

    getzonelistdata() {
        return this.zonelistdata;
    }

    // Zone list Pagination

    public zonePagiantion(params: ZonelistForm): Observable<any> {
        const reqOpts: any = {};
        // reqOpts.responseType = 'arraybuffer';
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/zone/zone-list', reqOpts);

    }

    // ZOne list

    public zoneList(params: ZonelistForm): Observable<any> {
        const reqOpts: any = {};
        // reqOpts.responseType = 'arraybuffer';
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/zone/zone-list', reqOpts);

    }

    // Zone delete
    public deleteZone(param: any, Id: number): Observable<any> {
        console.log('Id', Id);
        return this.http.delete(this.url + '/zone/delete-zone/' + Id, param);
    }

    // new zone
    addZone(param: ZoneForm): Observable<any> {
        return this.http.post(this.url + '/zone/add-zone', param);
    }

    // update zone
    updateZone(params) {
        console.log('api calling update', params);
        let val = params;
        const reqOpts: any = {};
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: {zoneId: params.zoneId}
        };
        return this.http.put(this.url + '/zone/update-zone/' + params.zoneId, val);

    }
}
