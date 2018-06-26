import { Component } from '@angular/core';
import { Platform,IonicPage, NavController,ModalController, NavParams,ViewController,AlertController,LoadingController,normalizeURL } from 'ionic-angular';
import {AppEngineProvider} from '../../providers/app-engine/app-engine';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import {Storage} from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-stock-update',
  templateUrl: 'stock-update.html',
})
export class StockUpdatePage {
  obj:any;
  objarray=[];
  name="";

ModalController
  imageURI:any;
  imageFileName:any;
  imgname:string;
  initqty:any;
  userid:any;
  update='no';
  role:any;
  credential={pin:''}
  //constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public engine:AppEngineProvider,public viewctrl:ViewController,public al:AlertController) {
     constructor(
       public platform:Platform,
       public transfer:FileTransfer,
       private camera:Camera,
       public loadingCtrl: LoadingController,
       public navCtrl: NavController,
       public navParams: NavParams,
       public engine:AppEngineProvider,
       public viewctrl:ViewController,
       public al:AlertController,
       public modal:ModalController,
       public storage:Storage)
  {
   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockupdatePage');
  }

  ionViewWillLoad(){
    this.storage.ready().then(() => {
      this.storage.get('user').then((data)=>{
        this.userid=data[0].user_id;
      });
   });
  }

  


  decrement(){
    
    if((this.credential.pin !='')){
     
      if(this.obj.qty>0){
        this.obj.qty=this.obj.qty-1;
      }
            
        }else{
          let alert = this.al.create({title:"Please Insert your Pin",
          subTitle:"You can not reduce stock without Pin",
          buttons:['Dismiss']});
          alert.present();
          
        }
   
  }

  increment(id){
   
  
    if((this.credential.pin !='')&&(this.credential.pin!=null)){
      if(this.obj.qty < this.initqty){
        this.obj.qty=this.obj.qty+1;
      }
    }else{
      let alert = this.al.create({title:"Please Insert your Pin",subTitle:"You can not increase stock without Pin",buttons:['Dismiss']});
          alert.present();
          
        
    }

      

  }

  done(){
   
    
  }
  

  dismiss(){
    this.viewctrl.dismiss({"status":this.update});
  }
 
 
}
