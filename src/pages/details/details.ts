import { Component } from '@angular/core';
import { IonicPage, NavParams,NavController,LoadingController} from 'ionic-angular';
import {AppEngineProvider} from '../../providers/app-engine/app-engine';
import { ImgLoader, ImageLoaderConfig } from 'ionic-image-loader';
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  orderid:String;
  orderdetails:any;
  endtitle:string;
  orderdate:string;
  itemscount=0;
  logo:any;
  total=0;
  imgurl:any;
  constructor(public loadingCtr:LoadingController,public imageloaderconfig:ImageLoaderConfig,public navCtrl: NavController, public navParams: NavParams,public engine:AppEngineProvider) {
    this.orderid=navParams.get("id");
    imageloaderconfig.enableSpinner(true);
    this.imgurl=this.engine.imgurl;
  }

  // go to another page;
  goTo(page){
    this.navCtrl.push(page);
  }

  ionViewWillLoad() {
    this.engine.getOrderdetails(this.orderid).subscribe((data)=>{
      console.log(data)
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

}
