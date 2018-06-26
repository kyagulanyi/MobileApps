import { Component } from '@angular/core';
import { IonicPage, NavParams,Platform,NavController,ModalController,LoadingController} from 'ionic-angular';
import {AppEngineProvider} from '../../providers/app-engine/app-engine';
import {Storage} from '@ionic/storage';
import { ImgLoader, ImageLoaderConfig } from 'ionic-image-loader';
@IonicPage()
@Component({
  selector: 'page-stock-details',
  templateUrl: 'stock-details.html',
})
export class StockDetailsPage {

  inventoryid:String;
  orderdetails=[];
  itemscount:Number;
  logo:any;
  total:any;
  imgurl:any;
  mirindaorange:any;

  constructor(public loadingCtr:LoadingController,public imageloaderconfig:ImageLoaderConfig ,public navCtrl: NavController,public storage:Storage,public Navctr:NavController,public navParams: NavParams,public engine:AppEngineProvider,public platform:Platform,public modal:ModalController) {
    
    console.log(this.inventoryid);
    imageloaderconfig.enableSpinner(true);
    this.imgurl=this.engine.imgurl;
   
  }

  ionViewWillLoad() {
    this.inventoryid=this.navParams.get('id');
    let loading= this.loadingCtr.create({
      spinner:'crescent',
    });
    loading.present();

    this.engine.getInventoryStock(this.inventoryid).subscribe((data)=>{
        this.mirindaorange=data;
    },(err)=>{console.log(err)},
    ()=>{loading.dismiss();});

  }
 

  updatestock(obj){
    let mod=this.modal.create("InventUpdatePage",{obj:obj});
  
    mod.present();
  }
 
  date(date){
    var array = new Date(date).toUTCString().toString().split(" ");
    return array[0]+" "+array[1]+" "+array[2]+" "+array[3]+" "+array[4];
  }
}
