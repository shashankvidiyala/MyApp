import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CamsPage} from '../cams/cams'
import {SettingsPage} from '../settings/settings'
import { AngularFireAuth } from 'angularfire2/auth'

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  camspage=CamsPage;
  settingspage=SettingsPage;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth: AngularFireAuth) {
 this.afAuth.authState.subscribe(res => {
           if (res && res.uid) {
           console.log('user is logged in from tabspage');
       } else {
         console.log('user not logged in pop from tabs');
         if(this.navCtrl.canGoBack()){
          this.navCtrl.pop();
          
         }
         
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
  logout(){
    this.navCtrl.pop();
  }

}
