import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TerminosexpPage} from '../terminosexp/terminosexp';
import {Platform} from 'ionic-angular';
import {InicioPage} from '../inicio/inicio';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the TerminosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-terminos',
  templateUrl: 'terminos.html',
})
export class TerminosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminosPage');
  }

verterminos(){
  this.navCtrl.push("vertodos")
}


salir(){
  this.platform.exitApp();
}



iraemergencias(){
    this.storage.set('intro-done', false);
  this.navCtrl.setRoot(InicioPage, {}, {animate:true})

}
}
