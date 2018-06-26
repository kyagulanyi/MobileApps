import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController, NavParams,Platform,ViewController,AlertController,LoadingController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {AppEngineProvider} from '../../providers/app-engine/app-engine';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  stores:any;
  products=[];
  orders=[];
  public showsearch: boolean = false;
 
  public showSearchBar: boolean = false;
  itemsorders:Number=0;
  total:Number=0;
  storeid:Number;
  navid:any=0;
  navstate:boolean=false;
  name:any;
   status:Boolean=true;
   data:any= {event:''};
   searchQuery: string = '';
   items: any[];
   descending: boolean = false;
   order: number;
   column: string = 'name';
   item1={id:0}
  constructor( private alertCtrl: AlertController,public modalCtrl: ModalController,private loader:LoadingController,public alt:AlertController,public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public engine:AppEngineProvider,public platform:Platform,public viewCtrl:ViewController) {
    this.navid=this.navParams.get("navid");
   
    this.initializeItems();
   
  }
 
  
  clickedSearchIcon(event: Event) {
    this.showSearchBar = !this.showSearchBar;
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
  ionViewWillEnter(){
   
  }

  decrement(id){
    for(let i=0;i<this.orders.length;i++){
      if(this.orders[i].id==id){
        let intqty=parseInt(this.orders[i].qty);
        if(intqty>0){
          let newqty = intqty-1;
          this.orders[i].qty=newqty;
        }
      }
    }
    this.setitemordered();
    this.calculateamount();
  }

  setitemordered(){
    var sum=0;
    for(let i=0;i<this.orders.length;i++){
      if(this.orders[i].qty >0){
        sum++;
      }
    }
    this.itemsorders=sum;
  }
  //sorting algorithm
  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
 
 
//Another search test
initializeItems() {
 this.items=this.orders;

}
 //Search items 
getItems(ev: any) {
  // Reset items back to all of the items
  this.initializeItems();

  // set val to the value of the searchbar
  let val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
    this.items = this.items.filter((item) => {
      return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);// only filter orders name
    })
  }
}

  increment(id){
    for(let i=0;i<this.orders.length;i++){
      if(this.orders[i].id==id){
        let intqty=parseInt(this.orders[i].qty);
        let newqty = intqty+1;
        this.orders[i].qty=newqty;
      }
    }
    this.setitemordered();
    this.calculateamount();
  }

  calculateamount(){
    var sum=0;
    for(let i=0;i<this.orders.length;i++){
      if(this.orders[i].qty >0){
        sum+=this.orders[i].qty*this.orders[i].unitprice;
      }
    }
    this.total=sum;
  }

  makeorder(){
    let modal = this.modalCtrl.create("ComfirmorderPage");
      modal.present();
 
  }

 

   

  dismiss() {
    this.viewCtrl.dismiss();
  }

 
}
