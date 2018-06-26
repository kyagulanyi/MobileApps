import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComfirmorderPage } from './comfirmorder';
//import { PipesModule} from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    ComfirmorderPage,
  ],
  imports: [
    IonicPageModule.forChild(ComfirmorderPage),
  ],
})
export class ComfirmorderPageModule {}
