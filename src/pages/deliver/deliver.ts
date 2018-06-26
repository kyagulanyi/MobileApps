import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,LoadingController } from 'ionic-angular';
import {AppEngineProvider} from '../../providers/app-engine/app-engine';
import { ImageLoaderConfig } from 'ionic-image-loader';
import {Storage} from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-deliver',
  templateUrl: 'deliver.html',
})

export class DeliverPage{
  orderid:String;
  orderdetails:any;
  endtitle:string;
  orderdate:string;
  itemscount=0;
  logo:any;
  total=0;
  imgurl:any;
  role:any;
  constructor(public loadingCtr:LoadingController,public modctrl:ModalController,public storage:Storage ,public imageloaderconfig:ImageLoaderConfig,public navCtrl: NavController, public navParams: NavParams,public engine:AppEngineProvider) {
    this.orderid=navParams.get("id");
    imageloaderconfig.enableSpinner(true);
    this.imgurl=this.engine.imgurl;
    this.userdata();
  }

  // go to another page;
  goTo(page){
    this.navCtrl.push(page);
  }

  ionViewWillLoad() {
    this.engine.getOrderdetails(this.orderid).subscribe((data)=>{
      console.log(data)
      console.log(this.orderid)
        this.orderdetails=data;
    },(err)=>{console.log(err)},
    ()=>{this.gettotal()}
  );
  
  }

  gettotal(){
    for (let index = 0; index < this.orderdetails.length; index++) {
      this.orderdate=this.orderdetails[index].orderdate;
      this.endtitle=this.orderdetails[index].endtitle;
      // console.log(this.orderdetails[index]);
      this.total =this.total+  this.orderdetails[index].amount;
      this.itemscount++;
    }
  }

  date(date){
    var array = new Date(date).toUTCString().toString().split(" ");
    return array[0]+" "+array[1]+" "+array[2]+" "+array[3]+" "+array[4];
  }

  userdata(){
    this.storage.get("userdata").then((data)=>{
        this.role=data.role;
        
    });
  }
  updatedelivery(obj){
    let modal = this.modctrl.create("SmallmodalPage",{orderedsubcat:obj});
    modal.onDidDismiss((data)=>{
      if(data.status){
        //this.engine.presentToast('Updated, pull to refresh');
      }
    });
    modal.present();
  }
}
