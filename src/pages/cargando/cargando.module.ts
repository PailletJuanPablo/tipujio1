import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CargandoPage } from './cargando';

@NgModule({
  declarations: [
    CargandoPage,
  ],
  imports: [
    IonicPageModule.forChild(CargandoPage),
  ],
  exports: [
    CargandoPage
  ]
})
export class CargandoPageModule {}
