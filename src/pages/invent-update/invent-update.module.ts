import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InventUpdatePage } from './invent-update';

@NgModule({
  declarations: [
    InventUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(InventUpdatePage),
  ],
})
export class InventUpdatePageModule {}
