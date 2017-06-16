import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverpagePage } from '../popoverpage/popoverpage'


@IonicPage()
@Component({
  selector: 'page-cams',
  templateUrl: 'cams.html',
})
export class CamsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CamsPage');
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverpagePage);
    popover.present({
      ev: myEvent
    });
  }

}
