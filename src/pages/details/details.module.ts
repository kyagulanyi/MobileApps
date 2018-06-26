import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsPage } from './details';
//import { IonicImageLoader } from 'ionic-image-loader';
import { IonicImageLoader } from 'ionic-image-loader';
import { PipesModule} from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    DetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsPage),
    IonicImageLoader,
    PipesModule
  ],
})
export class DetailsPageModule {}
 