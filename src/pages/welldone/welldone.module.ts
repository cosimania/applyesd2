import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelldonePage } from './welldone';

@NgModule({
  declarations: [
    WelldonePage,
  ],
  imports: [
    IonicPageModule.forChild(WelldonePage),
  ],
})
export class WelldonePageModule {}
