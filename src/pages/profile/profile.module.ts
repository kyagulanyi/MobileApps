import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { IonicImageLoader } from 'ionic-image-loader';
import { PipesModule} from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    IonicImageLoader,
    PipesModule
  ],
})
export class ProfilePageModule {}
