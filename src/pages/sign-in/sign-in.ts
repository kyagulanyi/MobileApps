import { Component} from '@angular/core';
import { IonicPage, NavController,ModalController,Platform,AlertController, LoadingController, Loading} from 'ionic-angular';
import {AppEngineProvider} from '../../providers/app-engine/app-engine';
import {Storage} from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  details={ email:'', password:''};
  
  products=[];
  loading: Loading;
  data:any;
  errors:Boolean=false;
  constructor(public modalCtrl:ModalController,public navCtrl: NavController,public platform:Platform,public storage:Storage,public Engine:AppEngineProvider,public alert:AlertController,private loadingCtrl: LoadingController) {
        this.storage.get('userdata').then((data)=>{
            if(data.loggedin){
              navCtrl.setRoot('MenuPage');
            }
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //login send details to server
  login(){
   
    this.platform.ready().then(()=>{
      let loading= this.loadingCtrl.create({
        spinner:'crescent',
      });
      loading.present();
      let email=JSON.parse(JSON.stringify(this.details)).email;
      let pass=JSON.parse(JSON.stringify(this.details)).password;

      if((email !='') && (pass!='') && (pass!=null)&& (email!=null)){
        this.Engine.login(email,pass).subscribe(data=>{
          this.data=data
        },(err)=>{console.log(err)},
        ()=>{
            this.data.flag?this.setsession():this.errors=true;
        }); 
      }
      else{
        let er = this.alert.create({"title":"Signin response","message":"Please fill all fields",buttons: ['Dismiss']});
        er.present();
      }
      setTimeout(() => {
        loading.dismiss( );
    }, 10000);
    });
    
  }

  setsession(){
    this.storage.set('userdata',this.data);
    this.navCtrl.setRoot('MenuPage');
  }
  
presentModal(modalPage) {
  let modal = this.modalCtrl.create(modalPage);
  modal.present(); 
}



}
