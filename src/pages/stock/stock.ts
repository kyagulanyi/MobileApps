import { Component } from '@angular/core';
import { IonicPage,Platform,LoadingController} from 'ionic-angular';
import {AppEngineProvider} from '../../providers/app-engine/app-engine';

@IonicPage()
@Component({
  selector: 'page-stock',
  templateUrl: 'stock.html',
})
export class StockPage {
  relations:any;
  stock:any;
  storeid:any;
  imgurl:any;
  orderstate=false;
  status:Boolean=true;
  selected:Boolean=false;
  public showsearch: boolean = false;
  public showselect: boolean=false;
  public showSearchBar = false;
  public proptype:string = "in";

  constructor(public loadingCtr:LoadingController,public engine:AppEngineProvider,public platform:Platform) {
    this.imgurl=this.engine.imgurl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockPage');
  }

  ionViewWillEnter(){
    this.engine.getRelations().subscribe((data)=>{
      this.relations=data
    },(err)=>{console.log(err);},
    ()=>{
      this.selected=false;
    }
  );
  }
  clickedSearchIcon(event: Event) {
    this.showSearchBar = !this.showSearchBar;
    //this.navCtrl.push("ProfilePage");
  }
  pickstore(){
    this.engine.getRelationsStock(this.storeid).subscribe((data)=>{
      this.stock=data;
      this.selected=true;
    },(err)=>{console.log(err);},
    ()=>{
      if(this.stock.subcats.length>0){
        this.orderstate=false;
      }else{
        this.orderstate=true;
      }
    }
  );
  }

  date(date){
    var monthNames = ["Jan", "Feb", "Mar", "April", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
    let orderdate = new Date(date);
    let actd = orderdate.getDate()+'-'+monthNames[orderdate.getMonth()]+'-'+orderdate.getFullYear();
    return actd;
  }
 
}