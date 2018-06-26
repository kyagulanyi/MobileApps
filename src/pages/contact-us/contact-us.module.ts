import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactUsPage } from './contact-us';
import { IonicImageLoader } from 'ionic-image-loader';
import { PipesModule} from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    ContactUsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactUsPage),
    IonicImageLoader,
    PipesModule
  ],
})
export class ContactUsPageModule {}
