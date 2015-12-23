import {App, Platform} from 'ionic/ionic';
import {Login} from './Login/login';


@App({
  templateUrl: 'app/app.html'
})
export class MyApp {
  constructor(platform: Platform) {

    this.rootPage = Login;    

    platform.ready().then(() => {
      // Do any necessary cordova or native calls here now that the platform is ready
    });    
    
  }
}
