// import { Injectable, NgZone } from '@angular/core';
// import { BackgroundGeolocation, BackgroundGeolocationConfig } from '@ionic-native/background-geolocation';
// import { Geolocation, Geoposition } from '@ionic-native/geolocation';
// import {AppEngineProvider} from '../app-engine/app-engine'
// import 'rxjs/add/operator/filter';
// import { Diagnostic } from '@ionic-native/diagnostic';

// @Injectable()
// export class LocationProvider {
 
//   public watch: any;   
//   public lat: number = 0;
//   public lng: number = 0;
//   locenable=false;
//   constructor(private diag:Diagnostic,public zone: NgZone,public backgroundGeolocation:BackgroundGeolocation,private geolocation:Geolocation,public engine:AppEngineProvider) {
 
//   }
 
//   startTracking(){
//     this.diag.isLocationEnabled().then(()=>{this.startTracking1()}).catch(()=>{
//       this.engine.presentToast("Please enable location services");
//       this.backgroundGeolocation.showLocationSettings();
//     });
//   }

//   startTracking1() {
//       // Background Tracking
    
//   var config:BackgroundGeolocationConfig= {
//     desiredAccuracy: 0,
//     stationaryRadius: 30,
//     distanceFilter: 30,
//     debug: false,
//     interval:36000000,
//     notificationTitle: "", // Android
//     notificationText: "", // Android
//   };

//   this.backgroundGeolocation.configure(config).subscribe((location) => {
//      console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

//     // Run update inside of Angular's zone
//     this.zone.run(() => {
//       this.lat = location.latitude;
//       this.lng = location.longitude;
//       this.engine.location({'latitude':this.lat,"longitude":this.lng}).subscribe((data)=>{
//         console.log(data);
//       });         
//     }); 
//   }, (err) => {
//     console.log(err);
//   });
 
 
 
//   // Foreground Tracking
//   // let options = {
//   //   maximumAge:0,
//   //   timeout:60*60*60*60,
//   //   frequency:1,
//   //   enableHighAccuracy: true
//   // };
 
//   // this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
  
  
//   //         // Run update inside of Angular's zone
//   //         this.zone.run(() => {
//   //           this.lat = position.coords.latitude;
//   //           this.lng = position.coords.longitude;
//   //           this.engine.location({'latitude':this.lat,"longitude":this.lng}).subscribe((data)=>{
//   //             console.log(data);
//   //           });
//   //         });

//   //       });
//   this.backgroundGeolocation.finish();
//     this.watch.unsubscribe();

// }
 
//   stopTracking() {
//     this.backgroundGeolocation.finish();
//     this.watch.unsubscribe();
//   }
 
// }