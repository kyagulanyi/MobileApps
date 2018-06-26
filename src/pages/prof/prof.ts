import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { ImageLoaderConfig } from 'ionic-image-loader';
import {AppEngineProvider} from '../../providers/app-engine/app-engine';
@IonicPage()
@Component({
  selector: 'page-prof',
  templateUrl: 'prof.html',
})
export class ProfPage {
  firstname:any;
  secondname:any;
  role:any;
  logo:any;
  email:any;
  change:Boolean=false;
  imgurl:any;
  pass:any;userid:any;
  changedet={password:"",password1:"",password2:""}
  constructor(private alert:AlertController,public engine:AppEngineProvider,public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public imageloaderconfig:ImageLoaderConfig) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfPage');
  }

  ionViewWillEnter(){
    this.userdata();
  }

  userdata(){
    this.storage.get('userdata').then((data)=>{
        this.firstname=data.firstname;
        this.secondname=data.lastname;
        this.role=data.role;
        this.email=data.email;
    });
  }

  password(){
    if(this.change==false){
      this.change=true;
    }else{
      this.change=false;
    }
    console.log(this.change);
  }


  changepasssword(){
    if(this.changedet.password=="" || this.changedet.password1=="" || this.changedet.password2==""){
      console.log('please provide all fields');
      //paul show this in a toast
    }else{
      if(this.changedet.password1!=this.changedet.password2){
        console.log('passwords dont match');
        //paul show this in a toast
      }else{
        this.engine.changepassword(this.changedet).subscribe((data)=>{
          console.log("passwordchange")
        });
      }
    }
  }

}
