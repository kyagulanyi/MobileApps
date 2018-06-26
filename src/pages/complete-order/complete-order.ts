import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-complete-order',
  templateUrl: 'complete-order.html',
})
export class CompleteOrderPage {

  constructor(public viewCtrl: ViewController,public appCtrl: App,public navCtrl: NavController, public navParams: NavParams,) {
  }

  // dismis complete Modal
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
