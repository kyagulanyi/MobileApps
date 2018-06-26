import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeliverPage } from './deliver';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    DeliverPage,
  ],
  imports: [
    IonicPageModule.forChild(DeliverPage),
    IonicImageLoader,
  ],
})
export class DeliverPageModule {}
