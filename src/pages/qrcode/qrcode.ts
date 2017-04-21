import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {QRCodeComponent} from 'angular2-qrcode';
/**
 * Generated class for the Qrcode page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class Qrcode {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Qrcode');
  }

}
 
