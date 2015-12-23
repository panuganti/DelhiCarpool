import {Page, NavController} from 'ionic/ionic';
import {Tabs} from '../Tabs/tabs'

@Page({
    templateUrl: 'app/Login/login.html'
})
export class Login {
    constructor(nav: NavController) {
        this.nav = nav;
    }
    goToOtherPage() {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.nav.push(Tabs);
    }
}

