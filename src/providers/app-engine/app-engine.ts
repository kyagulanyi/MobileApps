import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { AlertController,Platform,ToastController} from 'ionic-angular';
import {Storage}  from '@ionic/storage';


@Injectable()
export class AppEngineProvider {
  http:any;
   baseip='http://www.tredmo.francomserver.com/';
   //baseip='http://192.168.100.56/tredmo.sess/';
  //  baseip='http://localhost/simon/';
  baseurl:any;
  database:any;
  storesarray:Array<String>;
  header:any;
  imgurl:any;
  userid:any;
  supplierid:string;
  constructor(public storage:Storage,public https:HttpClient,public alert:AlertController,public platform:Platform,public toastCtrl: ToastController){
    this.imgurl=this.baseip+'img/';
    this.baseurl=this.baseip+'MobileController/';
    this.http=https;
    this.header=new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
    });

   this.storage.get('userdata').then((data)=>{
    this.supplierid=data.workingfor;
  });

  }

  login(email,password){
    let body = new FormData();
    body.append('email', email);
    body.append('password', password);
    let req=  this.http.post(this.baseurl+'login',body,this.header);
    return req;
  }


  getinventories(){
  let body = new FormData();
  body.append('supplierid',this.supplierid)
  // console.log(body);
  let res=this.http.post(this.baseurl+"getinventories",body,this.header);
  return res;
}

getInventoryStock(id){
  let body = new FormData();
  body.append('supplierid', this.supplierid);
  body.append('inventoryid', id);
  return this.http.post(this.baseurl+"getInventoryStock",body,this.header);
}

updatestock(qty,id){
  let body = new FormData();
  body.append('subcatid', id);
  body.append('qtyavailable', qty);
  return this.http.post(this.baseurl+"updatestock",body,this.header);
}

getorders(){
  let body= new FormData();
  body.append('supplierid',this.supplierid)
  return this.http.post(this.baseurl+"getorders",body,this.header);

}

getOrderdetails(orderid){
  let body= new FormData();
  body.append('orderid',orderid)
  return this.http.post(this.baseurl+"getOrderdetails",body,this.header);
}

getRelations(){
  let body= new FormData();
  body.append('supplierid',this.supplierid)
  return this.http.post(this.baseurl+"getRelations",body,this.header);
}

getRelationsStock(id){
  let body= new FormData();
  body.append('enduserid',id);
  body.append('supplierid',this.supplierid);
  return this.http.post(this.baseurl+"getRelationsStock",body,this.header);
}

changepassword(det){
  let body= new FormData();
  body.append('oldpassword',det.password);
  body.append('newpassowrd',det.password1);
  body.append('userid',this.userid);
  return this.http.post(this.baseurl+"getRelationsStock",body,this.header);
}

updatedelivery(data){
  let body= new FormData();
  body.append('id',data.orderedsubcat);
  body.append('qtydelivered',data.qtydelivered);
  body.append('userid',this.userid);
  return this.http.post(this.baseurl+"updatedelivery",body,this.header);
}
}