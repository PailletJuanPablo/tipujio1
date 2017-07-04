import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NetsPage } from '../nets/nets';
import { MessagesPage } from '../messages/messages';
import { TimerPage } from '../timer/timer';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

declare var window;
/**
. * Generated class for the InicioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

redes=NetsPage;
timer=TimerPage;
mensajes=MessagesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public platform: Platform, public diagnostic:Diagnostic, private alertCtrl: AlertController, public splashScreen: SplashScreen) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
    this.splashScreen.hide();

  }
llamar(numerorecibido){
  window.location=numerorecibido;
}
denunciar() {
  this.platform.ready().then((readySource) => {

  this.diagnostic.isLocationEnabled().then(
    (isAvailable) => {
      if (isAvailable === true){

      this.navCtrl.push(TimerPage)
      }else{
        let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Debes activar tu ubicación para poder enviar una alerta',
    buttons: ['Aceptar']
  });
  alert.present();

      }

//  console.log('Is available? ' + isAvailable);
//  alert('Is available? ' + isAvailable);
//   this.puedecontinuar = true;
  }).catch( (e) => {
  console.log(e);
  alert(JSON.stringify(e));
  });


  });



   }
}
