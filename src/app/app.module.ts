import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Global } from '../providers/global';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { AppEngineProvider } from '../providers/app-engine/app-engine';
import { HttpClientModule} from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { FileTransfer,FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import {IonicImageLoader} from 'ionic-image-loader';
import { Diagnostic } from '@ionic-native/diagnostic';
import { ActionSheet } from '@ionic-native/action-sheet';

var config = {
      backButtonText: '',
      iconMode: 'ios',
      mode:'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      pageTransition: 'ios',
    };

@NgModule({
  declarations: [
    MyApp,
    //Sort1Pipe
 
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,config),
    
    
    IonicImageLoader.forRoot(),
    IonicStorageModule.forRoot(
      {
        name: 'fspro',
           driverOrder: ['indexeddb', 'sqlite', 'websql']
      }
    ),
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ActionSheet,
    {provide: ErrorHandler, useClass: IonicErrorHandler},Global,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    //BackgroundGeolocation,
    //Geolocation,
    AppEngineProvider,
    //LocationProvider,
    Diagnostic 
  ]
})
export class AppModule {}
