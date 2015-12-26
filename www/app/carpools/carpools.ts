/// <reference path="../../../typings/googlemaps/google.maps.d.ts" />
import {Page} from 'ionic-framework/ionic';
import {ServerData} from '../providers/server-data';

@Page({
    templateUrl: 'app/carpools/carpools.html'
})
export class CarpoolPage {
    service: ServerData;
    constructor(service: ServerData) {
        this.service = service;
    }

    onPageLoad() {
        let mapElement = document.getElementById('map');
        let map = new google.maps.Map(mapElement, {
            zoom: 16
        });        
        //var carpools:Promise<any> = this.service.getCarpools();       
    }

    loadMapWithData(mapData: any[]) {
        mapData.forEach(markerData => {
            let infoWindow = new google.maps.InfoWindow({
                content: `<h5>${markerData.name}</h5>`
            })});
        }        
}
