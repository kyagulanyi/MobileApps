import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StockUpdatePage } from './stock-update';

@NgModule({
  declarations: [
    StockUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(StockUpdatePage),
  ],
})
export class StockUpdatePageModule {}
