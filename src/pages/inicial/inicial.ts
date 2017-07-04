import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TerminosPage} from '../terminos/terminos';
import {InicioPage} from '../inicio/inicio';
import { Storage } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * Generated class for the InicialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-inicial',
  templateUrl: 'inicial.html',
})
export class InicialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public splashScreen: SplashScreen) {
  }

ionViewWillEnter() {
    console.log('ionViewDidLoad InicialPage');
    this.storage.get('intro-done').then(done => {
   if (done === false) {

     this.navCtrl.setRoot(InicioPage)
   }})


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
    this.splashScreen.hide();

  }
terminos(){
  this.navCtrl.push(TerminosPage,{},{animation:'ios-transition'})
}

}
