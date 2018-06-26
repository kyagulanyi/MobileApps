import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,ViewController,AlertController,LoadingController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {AppEngineProvider} from '../../providers/app-engine/app-engine';


/**
 * Generated class for the ComfirmorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comfirmorder',
  templateUrl: 'comfirmorder.html',
})
export class ComfirmorderPage {
 public items:any[];
 searchQuery: string = '';

 descending: boolean = false;
 order: number;
 column: string = 'name'
    stores:any;
    products=[];
    orders=[];
    itemsorders:Number=0;
    total:Number=0;
    storeid:Number;
    userid:Number;
    clientid:Number;
    initials:String;
    navid:any=0;
    navstate:boolean=false;
    name:any;
    imgurl:any;
    status:Boolean=true;
    data:any= {event:''};
     test:any;
   
     item1={id:0}
    constructor(private loader:LoadingController,public alt:AlertController,public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public engine:AppEngineProvider,public platform:Platform,public viewCtrl:ViewController) {
      this.navid=this.navParams.get("navid");
      this.imgurl=this.engine.imgurl;
      this.initializeItems();
      // this.storage.get("products").then((data)=>{
      //   let dataz=JSON.parse(JSON.stringify(data));
      //   for (let index = 0; index < dataz.length; index++) {
      //     this.status=false;
      //     var obj={};
      //     obj['name']=dataz[index].name;
      //     obj['id']=dataz[index].product_id;
      //     obj['image']=dataz[index].image;
      //     obj['unitprice']=dataz[index].unitprice;
      //     obj['qty']=0;
      //     this.orders.push(obj);
      //   }
      //   });
    }
    mirindaorange=[
      {name:'Mirinda Orange 1.5 litres', qty:450,units:'Cartons'},
      {name:'Mirinda Orange 500 mls', qty:450,units:'Cartons'},
      {name:'Mirinda Orange 300 mls', qty:450,units:'Crates'}
    ]
    MirindaPinaple=[
      {name:'Mirinda Pinaple 1.5 litres', qty:450,units:'Cartons'},
      {name:'Mirinda Pinaple 500 mls', qty:450,units:'Cartons'},
      {name:'Mirinda Pinaple 300 mls', qty:450,units:'Crates'}
    ]
    MirindaFruity=[
      {name:'Mirinda fruity 1.5 litres', qty:450,units:'Cartons'},
      {name:'Mirinda fruity 500 mls', qty:350,units:'Cartons'},
      {name:'Mirinda fruity 300 mls', qty:250,units:'Crates'}
    ]

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
 
   
  
    makeorder(){
      this.navCtrl.push("CompleteOrderPage");
    }
  
  
   
  
    dismiss() {
      this.viewCtrl.dismiss();
    }
  
    
    closeModal() {
      this.navCtrl.pop();
    }
  
  }
