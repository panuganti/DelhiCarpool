import {Page, NavController} from 'ionic-framework/ionic';
import {SignupPage} from '../signup/signup';

@Page({
    templateUrl: 'app/profile/profile.html'
})
export class ProfilePage {
    nav: NavController;
    constructor(nav: NavController) {
        this.nav = nav;
    }

    edit() {
        this.nav.push(SignupPage, {}, {}, null);
    }
}
