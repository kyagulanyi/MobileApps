import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StockPage } from './stock';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    StockPage,
  ],
  imports: [
    IonicPageModule.forChild(StockPage),
    IonicImageLoader,
  ],
})
export class StockPageModule {}
