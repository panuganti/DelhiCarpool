import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {UserData} from './user-data';


@Injectable()
export class ServerData {
  http: any;
  user: any;
  data: any;

  constructor(http: Http, user: UserData) {
    // inject the Http provider and set to this instance
    this.http = http;
    this.user = user;
  }

  getCarpools() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('app/data/carpools.json').subscribe(res => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        resolve(this.data);
      });
    });
  }

  getUserProfile() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('app/data/userprofile.json').subscribe(res => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        resolve(this.data);
      });
    });
  }
}
