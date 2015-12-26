import {IonicApp, Page, Modal, Popup, NavController} from 'ionic-framework/ionic';

@Page({
    templateUrl: 'app/home/home.html'
})
export class HomePage {
    app: IonicApp;
    nav: NavController
    constructor(app: IonicApp, nav: NavController) {
        this.app = app;
        this.nav = nav;
    }
}
