import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantMenuPage } from './restaurant-menu';
import { PipesModule} from '../../pipes/pipes.module';
//import { LongPressModule } from 'ionic-long-press';
@NgModule({
  declarations: [
    RestaurantMenuPage ,
    //LongPressModule
  ],
  imports: [
    IonicPageModule.forChild(RestaurantMenuPage ),
    PipesModule,
    ///LongPressModule
  ],
})

export class RestaurantMenuPageModule {}
