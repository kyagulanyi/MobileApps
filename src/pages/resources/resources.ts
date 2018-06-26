import { Component } from '@angular/core';
import { IonicPage, NavParams,Platform,NavController,LoadingController} from 'ionic-angular';
import {AppEngineProvider} from '../../providers/app-engine/app-engine';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the ResourcesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html',
})
export class ResourcesPage {

  storedetails=[];
  resources:any;
  component={};
  storeid:any;
  flag:boolean=false;
  hidestatus={};
  status:Boolean=true;
  action='edit';
  stores:any;
  selected:Boolean=true;
  constructor(public loadingCtr:LoadingController,public storage:Storage,public Navctrl:NavController, public navParams: NavParams,public engine:AppEngineProvider,public platform:Platform) {

  }

  updateComponent(id){
    let data={item_id:id,component:this.component}
    this.Navctrl.push("UpdatePage",data);
  }

  ionViewWillEnter(){
    let loading= this.loadingCtr.create({
      spinner:'crescent',
    });
    loading.present();
    this.platform.ready().then(()=>{
      this.getstores().then((data)=>{
        this.stores=data;
        loading.dismiss();
      });
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad resourcepage');

  }


  getstores():Promise<{}>{
    return new Promise((resolve)=>{
      this.storage.ready().then(()=>{
        this.storage.get("shops").then((data)=>{
          let dataz=JSON.parse(JSON.stringify(data));
          resolve(dataz);
        });
      });
    })
  }
 


  

}
