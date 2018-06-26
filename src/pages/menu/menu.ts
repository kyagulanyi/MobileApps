import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav,Platform,AlertController } from 'ionic-angular';
import { Global } from '../../providers/global';
import {Storage} from '@ionic/storage';
//import { LocationProvider } from '../../providers/location/location';
import {AppEngineProvider} from '../../providers/app-engine/app-engine';
import { ImgLoader, ImageLoaderConfig } from 'ionic-image-loader';
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage:any;
  activeBtn = null;
  animateVarible;
  filedirPath:any;
  imgurl:any;
  userid:any;
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
  //Managers only
    pages: PageInterface[] = [
      { title: 'Dashboard', pageName: 'HomePage', tabComponent: 'Tab1Page', index: 0, icon: 'custom-home' },
      { title: 'Inventories', pageName: 'RestaurantMenuPage',  tabComponent: 'RestaurantMenuPage', icon: 'ios-construct-outline' },
      { title: 'Orders', pageName: 'ProfilePage',  tabComponent: 'ProfilePage', icon: 'custom-cart' },
      //{ title: 'Deliveries', pageName: 'ContactUsPage',  tabComponent: 'ContactUsPage', icon: 'custom-world' },
      { title: 'Realtions', pageName: 'StockPage',  tabComponent: 'StockPage', icon: 'custom-squares' },
      // { title: 'Resources', pageName: 'ResourcesPage',  tabComponent: 'ResourcesPage', icon: 'custom-stamp' },
      // { title: 'Competition', pageName: 'ReportsPage',  tabComponent: 'ReportsPage', icon: 'ios-construct-outline' },
      //{ title: 'Routes', pageName: 'NearByPage',  tabComponent: 'NearByPage', icon: 'custom-map' },
  ]
  //supliers Manager
  pages1:PageInterface[]=[
     { title: 'Dashboard', pageName: 'HomePage', tabComponent: 'Tab1Page', index: 0, icon: 'custom-home' },
     { title: 'Inventories', pageName: 'RestaurantMenuPage',  tabComponent: 'RestaurantMenuPage', icon: 'ios-construct-outline' },
      { title: 'Orders', pageName: 'ProfilePage',  tabComponent: 'ProfilePage', icon: 'custom-cart' },
      //{ title: 'Deliveries', pageName: 'ContactUsPage',  tabComponent: 'ContactUsPage', icon: 'custom-world' },
      { title: 'Customer Stock', pageName: 'StockPage',  tabComponent: 'StockPage', icon: 'custom-squares' },
      //{ title: 'Resources', pageName: 'ResourcesPage',  tabComponent: 'ResourcesPage', icon: 'custom-stamp' },
     
  ]
  //Suppliers Agent
  pages2:PageInterface[]=[
    { title: 'Dashboard', pageName: 'HomePage', tabComponent: 'Tab1Page', index: 0, icon: 'custom-home' },
    { title: 'Inventories', pageName: 'RestaurantMenuPage',  tabComponent: 'RestaurantMenuPage', icon: 'ios-construct-outline' },
    { title: 'Orders', pageName: 'ProfilePage',  tabComponent: 'ProfilePage', icon: 'custom-cart' },
    { title: 'Deliveries', pageName: 'ContactUsPage',  tabComponent: 'ContactUsPage', icon: 'custom-world' },
    //{ title: 'Customer Stock', pageName: 'StockPage',  tabComponent: 'StockPage', icon: 'custom-squares' },
     //{ title: 'Resources', pageName: 'ResourcesPage',  tabComponent: 'ResourcesPage', icon: 'custom-stamp' },
     


 ];ionic
  

  firstname:any;
  secondname:any;
  companyname:any;
  role:any;
  logo:any;s
  constructor(public navCtrl: NavController,//public loc:LocationProvider,
     public navParams: NavParams, public global: Global,public storage:Storage,public platform:Platform,public alt:AlertController,public imageloaderconfig:ImageLoaderConfig,public engine:AppEngineProvider) {
    
    //this.loc.getlocation();
    this.imgurl=this.engine.imgurl;
  
    imageloaderconfig.enableSpinner(true);
    this.userdata();

  }

  openPage(page: PageInterface) {
    let params = {};

    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }


  // log out function
  logOut(){
    this.storage.clear();
    this.nav.setRoot('SignInPage');
    this.activeBtn=null;
  }


  // select side menu items
  selectItem(i){
    this.activeBtn = i;
  }

  userdata(){
    this.storage.get("userdata").then((data)=>{
        let det=data;
        this.firstname=det.firstname;
        this.secondname=det.lastname;
        
        this.role=det.role;
        this.userid=det.userid;
        this.logo=det.supplierlogo;
        this.companyname=data.suppliername;
        this.rootPage="HomePage";
    });
  }

  OnImgaeLoad(loader:ImgLoader){
    console.log("loaded");
  }
  
  goto(prof){
    this.navCtrl.push('ProfPage',{});

  }

}