import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,AlertController,LoadingController} from 'ionic-angular';
import {AppEngineProvider} from '../../providers/app-engine/app-engine';

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  email:any;
  constructor(public loader:LoadingController,public alert:AlertController,public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public engine:AppEngineProvider) {
  }

  dismiss() {
   this.viewCtrl.dismiss();
 }

 send(){
 }
}
