import { Component } from '@angular/core';
import {IonicPage, NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular'
import { AngularFireAuth } from 'angularfire2/auth'

import { AuthProvider } from '../../providers/auth/auth';

import { usercreds } from '../../models/usercreds';

import { TabsPage } from '../tabs/tabs'




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   pass='';
   email='';
   msg='';
   credentials:usercreds;
  constructor(public navCtrl: NavController,public alerCtrl: AlertController,public authservice: AuthProvider,public loadingCtrl: LoadingController,public afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe(res => {
           if (res && res.uid) {
           console.log('user is logged in Pushing Tabs Page');
          this.navCtrl.push(TabsPage);
       } else {
         console.log('user not logged in');
        }
      });
  }
  myevent(){
    let alert = this.alerCtrl.create({
      title: 'Failed attempt',
      message: 'Your password or email is '+this.msg,
      buttons: ['Ok']
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 
  login() {
     let loading = this.loadingCtrl.create({
    content: 'Wait verifying username and password'
  });
  loading.present();
    
   this.authservice.login(this.email,this.pass).then((res: any) => {
     console.log("Click\n");
      if (!res.code){
        this.msg='correct';
        loading.dismiss();
      }
      else
        this.msg='wrong';
    }).catch(()=>{this.msg='wrong';
        loading.dismiss();
      this.myevent();}

    )
    
    
  }
  

}
