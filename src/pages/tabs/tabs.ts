import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})



export class TabsPage {



  tab1Root: any = 'StockPage';
  tab2Root: any = 'ResourcesPage';
  tab3Root: any = 'StoreOrderPage';
  store={storeid:0,name:""};
  myIndex: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
    this.store.storeid=this.navParams.get('storeid');
    this.store.name=this.navParams.get('storename');
  }

  

  onTabSelect(ev: any) {
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
  }

}
