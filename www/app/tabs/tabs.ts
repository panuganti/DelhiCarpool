import {Page} from 'ionic-framework/ionic';
import {SchedulePage} from '../schedule/schedule';
import {SpeakerListPage} from '../speaker-list/speaker-list';
import {MapPage} from '../map/map';
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
    this.homeTab = SchedulePage;
    this.carpoolTab = SpeakerListPage;
    this.profileTab = ProfilePage;
    this.contactsTab = ContactsPage;
  }
}
