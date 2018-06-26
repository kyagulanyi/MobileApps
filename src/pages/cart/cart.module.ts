import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartPage } from './cart';
import { IonicImageLoader } from 'ionic-image-loader';

import { PipesModule} from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CartPage,
   
  ],
  imports: [
    IonicPageModule.forChild(CartPage),
    IonicImageLoader,
    PipesModule
  ],
})
export class CartPageModule {}
