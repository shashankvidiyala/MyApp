import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs'
import { HomePage } from '../home/home'
/**
 * Generated class for the PopoverpagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popoverpage',
  templateUrl: 'popoverpage.html',
})
export class PopoverpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public afAuth: AngularFireAuth) {
    
  }
  close() {
    this.viewCtrl.dismiss();
  }
  logout(){
  this.afAuth.auth.signOut();
  this.viewCtrl.dismiss();
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverpagePage');
  }

}
