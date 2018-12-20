import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   loginResult;

  constructor(public navCtrl: NavController) {

  }

  signIn(_username,_password){
   if(_password == '1234'){
    this.loginResult ="Hello "+_username+"ยินดีต้อนรับค่ะ";
    this.navCtrl.push("phoneBookPage");
   }else{
    this.loginResult ="login failed ";
   }
  }
}//end class
