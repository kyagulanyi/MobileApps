import { Component,NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Storage} from '@ionic/storage';
import {AppEngineProvider} from '../providers/app-engine/app-engine';
//import {LocationProvider} from '../providers/location/location';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  firstname:any;
  role:any;
  secondname:any;
  userid:any;

  constructor(//public location:LocationProvider
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,storage:Storage,public engine:AppEngineProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      storage.get("user").then((data)=>{
        if(data !=null){
          let det=JSON.parse(JSON.stringify(data));
          this.firstname=det[0].firstname;
          this.secondname=det[0].secondname;
          this.userid=det[0].user_id;
          this.role=det[0].role;
          this.rootPage="MenuPage";
        }else{
          this.rootPage="SignInPage"
        }
      });
      //this.location.startTracking();
    });
  }


}

