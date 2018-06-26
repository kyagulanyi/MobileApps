import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams,LoadingController, Loading,PopoverController } from 'ionic-angular';
import {AppEngineProvider} from '../../providers/app-engine/app-engine';
import {Storage} from '@ionic/storage';
import {ImageLoaderConfig } from 'ionic-image-loader';


// import {LocationProvider} from '../../providers/location/location'
@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})


export class ContactUsPage {

  orders:any;
  userid:any;
  clientid:any;
  orderstate:Boolean=true;
  imgurl:any;
  filters:Boolean=false;
  stores:any;
  loading: Loading;
  role:any;
  items:any[];
  public press: number = 0;
  public showsearch: boolean = false;

  public showSearchBar = false;
  descending: boolean = false;
  order: number;
  column: string = 'name';
  public proptype:string = "in";
  constructor(private alertCtrl: AlertController,private popoverCtrl: PopoverController,public imageloaderconfig:ImageLoaderConfig,private loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public engine:AppEngineProvider) {
      imageloaderconfig.enableSpinner(true);
      this.imgurl=this.engine.imgurl;
      this.userdata();
  }

  // goT to another page function
  goTo(orderid){
    this.navCtrl.push("DeliverPage",{orderid:orderid,userid:this.userid});
  }


  ionViewDidLoad() {
    console.log('deliveries');

  
  }

  ionViewWillEnter(){
    
  //   this.storage.ready().then(() => {
  //     this.storage.get('user').then((data)=>{
  //       this.userid=data[0].user_id;
  //       this.clientid=data[0].workingfor;
  //       this.getorders(this.userid,this.clientid).then(()=>{
  //         console.log(this.orders);
  //         if(this.orders.length>0){
  //           this.orderstate=false;
  //         }
  //       });
  //     });
  //  });

   this.getstores().then((data)=>{
    this.stores=data;
  });
 
   console.log(this.orderstate);
  }

  getorders(userid,client):Promise<{}>{
    let loading= this.loadingCtrl.create({
        spinner:'crescent'
      });
      loading.present();
    return new Promise((ressolve) => {
      
        this.engine.getorders().subscribe((data)=>{
          this.orders=data;
          
            ressolve();
          
        });
        setTimeout(() => {
          loading.dismiss( );
      }, 2500);
      }
    );
}
doRefresh(refresher) {
  setTimeout(() => {
    this.filters=false;
    this.orders=[];
    this.storage.ready().then(() => {
      this.storage.get('user').then((data)=>{
        this.userid=data[0].user_id;
        this.clientid=data[0].workingfor;
        this.getorders(this.userid,this.clientid).then(()=>{
          if(this.orders.length>0){
            this.orderstate=false;
          
          }
        });
      });
   });
    refresher.complete();
  }, 0);
}
  date(date){
    var monthNames = ["Jan", "Feb", "March", "April", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
    let orderdate = new Date(date);
    let actd = orderdate.getDate()+'-'+monthNames[orderdate.getMonth()]+'-'+orderdate.getFullYear();
    return actd;
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

  filter(){
    if(this.filters == false){
      this.filters=true
    }else{
      this.filters=false;
    }
  }
  userdata(){
    // this.storage.get("user").then((data)=>{
    //     let det=JSON.parse(JSON.stringify(data));
        
    //     this.role=det[0].role;
      
    // });

    this.storage.get("client").then((data)=>{
      let det=JSON.parse(JSON.stringify(data));
     
  });
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
   hidesaerch(event: Event){
    this.showsearch=!this.showsearch;
   
  }
  clickedSearchIcon(event: Event) {
    this.showSearchBar = !this.showSearchBar;
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

}
