import { Component } from '@angular/core';
import { IonicPage, AlertController,NavController, NavParams,LoadingController, Loading,PopoverController } from 'ionic-angular';
//import {LocationProvider} from '../../providers/location/location'
import { Storage } from '@ionic/storage';
import {AppEngineProvider} from '../../providers/app-engine/app-engine';
import {  ImageLoaderConfig } from 'ionic-image-loader';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  orders:any;
  orderstate:Boolean=true;
  status=true;
  loading: Loading;
  descending: boolean = false;
   column: string = 'name';
   items:any[];
   public showsearch: boolean = false;
   public showselect: boolean=false;
   public showSearchBar = false;
   public proptype:string = "in";
   order: number;

   constructor(  
    private alertCtrl: AlertController,
    private popoverCtrl: PopoverController,
    public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public engine:AppEngineProvider,public imageloaderconfig:ImageLoaderConfig,private loadingCtrl: LoadingController) {
    imageloaderconfig.enableSpinner(true);
    this.initializeItems();
  }
  // goT to another page function
  goTo(orderid){
    this.navCtrl.push("DetailsPage",{id:orderid});
  }
  

  goToOrder(){
    this.navCtrl.push('CartPage');
  }

  ionViewWillEnter(){
   this.engine.getorders().subscribe((data)=>{
    this.orders=data;
   },(err=>{}),
   ()=>{
     if(this.orders.length>0){
       this.orderstate=false;
     }
   }
  )
}

  ionViewDidLoad() {
    console.log('deliveries');
 
  }

getorders():Promise<{}>{
    return new Promise((ressolve) => {
      let loading= this.loadingCtrl.create({
        spinner:'crescent'
      });
      loading.present();
        this.engine.getorders().subscribe(data=>{
            this.orders=data; 
            ressolve();
        });
        setTimeout(() => {
          loading.dismiss( );
      }, 2000);
        
      });
}



  OderDestail(orderid){
    this.navCtrl.push("DetailsPage", {
      id: orderid
    });
   
  }
  delivery(orderid){
    this.navCtrl.push("DeliverPage", {
      id: orderid
    });
  }

  date(date){
    var monthNames = ["Jan", "Feb", "Mar", "April", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];
    let orderdate = new Date(date);
    let actd = orderdate.getDate()+'-'+monthNames[orderdate.getMonth()]+'-'+orderdate.getFullYear();
    return actd;
  }

 

  doRefresh(refresher) {
    setTimeout(() => {
     
      this.orders=[];
      this.storage.ready().then(() => {
        this.storage.get('user').then((data)=>{
         
          this.getorders().then(()=>{
            if(this.orders.length>0){
              this.orderstate=false;

            }
          });
        });
     });
      refresher.complete();
    }, 0);
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
  
  //sort
  
  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
   //Search items 
   initializeItems() {
    this.items=this.orders;
   }

  clickedSearchIcon(event: Event) {
    this.showSearchBar = !this.showSearchBar;
    //this.navCtrl.push("ProfilePage");
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.storename.toLowerCase().indexOf(val.toLowerCase()) > -1);// only filter orders name
      })
    }
  }
}
