import { Component } from '@angular/core';
import { Platform,IonicPage, NavController,ModalController, NavParams,ViewController,AlertController,LoadingController } from 'ionic-angular';
import {AppEngineProvider} from '../../providers/app-engine/app-engine';

/**
 * Generated class for the InventUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invent-update',
  templateUrl: 'invent-update.html',
})
export class InventUpdatePage {

  inventordata:any;
  update='no';
  role:any;
  response:any;
  errors:boolean=false;
     constructor(
       public platform:Platform,
       public loadingCtrl: LoadingController,
       public navCtrl: NavController,
       public navParams: NavParams,
       public engine:AppEngineProvider,
       public viewctrl:ViewController,
       public al:AlertController,
       public modal:ModalController)
  {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockupdatePage');
  }

  ionViewWillLoad(){
    this.inventordata=this.navParams.get('obj');
    console.log(this.inventordata);

  }

  decrement(){  
      if(this.inventordata.qtyavailable>0){
        this.inventordata.qtyavailable=this.inventordata.qtyavailable-1;
      }
  }

  increment(id){   
        this.inventordata.qtyavailableavailable=this.inventordata.qtyavailable+1;
  }

  done(){
    this.engine.updatestock(this.inventordata.qtyavailable,this.inventordata.subcatid).subscribe((data)=>{
      this.response=data;
    },(err)=>{console.log(err)},
  ()=>{this.response.flag?this.dismiss1():this.errors=true});
  
  }

  dismiss1(){
    this.update='yes';
    this.viewctrl.dismiss({"status":this.update});
  }

  dismiss(){
    this.viewctrl.dismiss({"status":this.update});
  }
 
}