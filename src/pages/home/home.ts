import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Chart} from 'chart.js';
import {Storage} from '@ionic/storage';
import {AppEngineProvider} from '../../providers/app-engine/app-engine'
//import {LocationProvider} from '../../providers/location/location'
// import { Location } from '@angular/common';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('barCanvasyear') barCanvasyear;

  barChart: any;
  barChartyear: any;
  shops=[];
  userid:any;
  monthlabels:any;
  monthdata=[];
  yearlabels=[];
  yeardata=[];
  month="";
  
    constructor(public navCtrl: NavController, public navParams: NavParams,public Engine:AppEngineProvider,public storage:Storage,
        //public loc:LocationProvider
    ) {
    
  }

   stopProp($event){
    $event.stopPropagation();
  }

  // go to another page;
  goTo(page){
    this.navCtrl.push(page);
  }

  ionViewWillEnter(){
  }
  
  ionViewDidLoad() {

  }





}