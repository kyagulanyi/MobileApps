import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {AppEngineProvider} from '../../providers/app-engine/app-engine';
import { Platform,IonicPage, NavController, NavParams,PopoverController,AlertController,LoadingController,normalizeURL } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import {Storage} from '@ionic/storage';
//import {Directive, ElementRef, Input, OnInit, OnDestroy} from 'angular/core';
import {Gesture} from 'ionic-angular/gestures/gesture';




@IonicPage()
@Component({
  selector: 'page-restaurant-menu',
  templateUrl: 'restaurant-menu.html',
})
export class RestaurantMenuPage {
  obj:any;
  objarray=[];
  name="";
  imageURI:any;
  imageFileName:any;
  imgname:string;
  initqty:any;
  public press: number = 0;
  public buttonColor: string = "color9";
  public currentSelected: boolean=false;
  public showsearch: boolean = false;
  public showselect: boolean=false;
  public showSearchBar: boolean = false;
  public showcheckbox: boolean =false;
  descending: boolean = false;
  order: number;
  column: string = 'name';
  role:any;
  sizeId:any;
  items:any;
  
  proptype:string='in';
 
 
  constructor(
    public engine:AppEngineProvider,
    public platform:Platform,
    public transfer:FileTransfer,
    private alertCtrl: AlertController,
    private popoverCtrl: PopoverController,
    public navCtrl: NavController,
    public navParams: NavParams,
    
    private storage:Storage,
    private loadingCtrl:LoadingController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportsPage');
  }

  ionViewWillEnter(){
    this.engine.getinventories().subscribe((data)=>{
      this.items=data;
    });
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  myclick(posto:any) {  
   this.currentSelected = !this.currentSelected;
  }
  
   //Search items 
   initializeItems() {
    this.items=this.items;

   }

   hidesaerch(event: Event){
    this.showsearch=!this.showsearch;
  }
  
  checkbox(event:Event){
    this.showcheckbox=!this.showcheckbox;
   
  }

  getItems(ev: any) {
  // // Reset items back to all of the items
  // this.initializeItems();
  
  // // set val to the value of the searchbar
  // let val = ev.target.value;
  
  // // if the value is an empty string don't filter the items
  // if (val && val.trim() != '') {
  //   this.items = this.items.filter((item) => {
  //     return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);// only filter orders name
  //   })
 // }
  }
 
    clickedSearchIcon(event: Event) {
      this.showSearchBar = !this.showSearchBar;
    }

    gotodetails(id){
      this.navCtrl.push('StockDetailsPage',{id:id});
    }
 

    goToOrder(){
      this.navCtrl.push('CartPage');
    }
    
 
    presentPopover() {
      let alert = this.alertCtrl.create({
        title: 'Sort',
       
      });
      alert.addButton({
        text:'Ascending Order',
        cssClass:'alertcss-button ',
        handler: () => {
          this.descending = !this.descending;
          this.order = this.descending ? 1 : -1;
          return true;
        }
      });


      alert.addButton({
        text: 'Descending Order',
        cssClass:'alertcss-button ',
        handler: () => {
          this.descending = !this.descending;
          this.order = this.descending ? 1 : -1;
          return true;
        }
      });

      alert.addButton({
        text:'Sort by dates',
        cssClass:'alertcss-button ',
        handler: () => {
          this.descending = !this.descending;
          this.order = this.descending ? 1 : -1;
          return true;
        }
      });

      alert.present()
    }
    someAction() {
      this.buttonColor = "color9";
  }
  date(date){
    var monthNames = ["Jan", "Feb", "Mar", "April", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];
    let orderdate = new Date(date);
    let actd = orderdate.getDate()+'-'+monthNames[orderdate.getMonth()]+'-'+orderdate.getFullYear();
    return actd;
  }
 }


