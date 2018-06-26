import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StockDetailsPage } from './stock-details';
import { IonicImageLoader } from 'ionic-image-loader';



@NgModule({
  declarations: [
    StockDetailsPage ,
  ],
  imports: [
    IonicPageModule.forChild(StockDetailsPage ),
    IonicImageLoader
  ],
})
export class DetailsPageModule {}
 