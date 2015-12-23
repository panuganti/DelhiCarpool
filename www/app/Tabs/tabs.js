import {App, Platform} from 'ionic/ionic';
import {Home} from '../Home/home';
import {Search} from '../Search/search';
import {Profile} from '../Profile/profile';


@App({
  templateUrl: 'app/Tabs/tabs.html'
})
export class Tabs {
  constructor(platform: Platform) {

    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.homeTab = Home;
    this.searchTab = Search;
    this.profileTab = Profile;
    this.carpoolTab = Profile;

    platform.ready().then(() => {
      // Do any necessary cordova or native calls here now that the platform is ready
    });
  }
}
