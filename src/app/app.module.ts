import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { config } from './app.firebaseconfig';
 
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AuthProvider } from '../providers/auth/auth';
import { CamsPage } from '../pages/cams/cams'
import { SettingsPage } from '../pages/settings/settings'
import { TabsPage } from '../pages/tabs/tabs'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopoverpagePage} from '../pages/popoverpage/popoverpage'




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CamsPage,
    SettingsPage,
    TabsPage,
    PopoverpagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CamsPage,
    SettingsPage,
    TabsPage,
    PopoverpagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth
  ]
})
export class AppModule {}
