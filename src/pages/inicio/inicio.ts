import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NetsPage } from '../nets/nets';
import { MessagesPage } from '../messages/messages';
import { TimerPage } from '../timer/timer';


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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }
llamar(numerorecibido){
  window.location=numerorecibido;
}
}
