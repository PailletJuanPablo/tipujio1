import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TerminosexpPage } from './terminosexp';

@NgModule({
  declarations: [
    TerminosexpPage,
  ],
  imports: [
    IonicPageModule.forChild(TerminosexpPage),
  ],
  exports: [
    TerminosexpPage
  ]
})
export class TerminosexpPageModule {}
