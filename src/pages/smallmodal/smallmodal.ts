import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {AppEngineProvider} from '../../providers/app-engine/app-engine';


@IonicPage()
@Component({
  selector: 'page-smallmodal',
  templateUrl: 'smallmodal.html',
})
export class SmallmodalPage {
  max:any;
  min:any;
  tableid:any;
  name:any;
  data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewctrl:ViewController,public engine:AppEngineProvider) {
      this.data=this.navParams.get('orderedsubcat');
  }

  ionViewDidLoad() {
   
  }


decrement(id){
    if(this.data.qtydelivered>0){
      this.data.qtydelivered--;
  }
}

increment(id){
  if(this.data.qtydelivered<this.data.qtyordered){
    this.data.qtydelivered++;
  }
}

update(){
  console.log(this.data)
  this.engine.updatedelivery(this.data).subscribe((data)=>{
      console.log(data)

  })
}

dismiss(){
  this.viewctrl.dismiss();
}

}
