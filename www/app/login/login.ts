import {IonicApp, Page, NavController} from 'ionic-framework/ionic';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';


@Page({
  templateUrl: 'app/login/login.html',
})
export class LoginPage {
  nav: NavController;
  app: IonicApp;
  
  constructor(nav: NavController, app: IonicApp) {
    this.nav = nav;
    this.app = app;
  }

  login() {
    this.nav.push(TabsPage, {}, {}, null);
  }

  signup() {
    this.nav.push(SignupPage, {}, {}, null);
  }
}
