import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { usercreds } from '../../models/usercreds';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {
  
  constructor(public afireauth: AngularFireAuth) {

  }


  
  login(email,pass) {
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.signInWithEmailAndPassword(email,pass).then(() => {
        resolve(true);

      }).catch((err) => {
        reject(err);
       })
    })
   
    return promise;
    
  }

}