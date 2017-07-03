import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TerminosexpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage(
{
    name: "vertodos"
  })
@Component({
  selector: 'page-terminosexp',
  templateUrl: 'terminosexp.html',
})
export class TerminosexpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminosexpPage');
  }

}
