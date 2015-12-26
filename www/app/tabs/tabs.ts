import {Page} from 'ionic-framework/ionic';
import {HomePage} from '../home/home';
import {CarpoolPage} from '../carpools/carpools';
import {ContactsPage} from '../contacts/contacts';
import {ProfilePage} from '../profile/profile';


@Page({
  templateUrl: 'app/tabs/tabs.html'
})
export class TabsPage {
  homeTab: any;
  carpoolTab: any;
  profileTab: any;
  contactsTab: any;

  constructor() {
    // set the root pages for each tab
    this.homeTab = HomePage;
    this.carpoolTab = CarpoolPage;
    this.profileTab = ProfilePage;
    this.contactsTab = ContactsPage;
  }
}
