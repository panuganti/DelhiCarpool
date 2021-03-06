import {IonicApp, Page, NavController} from 'ionic-framework/ionic';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';


@Page({
    templateUrl: 'app/tutorial/tutorial.html',
})
export class TutorialPage {
    continueText: string = "Skip Intro";
    constructor(public nav: NavController, public app: IonicApp) {        
    }

    startApp() {
        this.nav.push(TabsPage, {}, {}, null);
    }

    onSlideChanged(event) {
        this.continueText = (event.isEnd == false) ? "Skip Intro" : "Continue";
    }

    onPageDidEnter() {
        // the root left menu should be disabled on the tutorial page
        this.app.getComponent('leftMenu').enable(false);
    }

    onPageWillLeave() {
        // enable the root left menu when leaving the tutorial page
        this.app.getComponent('leftMenu').enable(true);
    }
}
