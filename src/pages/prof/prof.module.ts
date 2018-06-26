import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfPage } from './prof';
import { IonicImageLoader } from 'ionic-image-loader';
@NgModule({
  declarations: [
    ProfPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfPage),
    IonicImageLoader,
  ],
})
export class ProfPageModule {}
