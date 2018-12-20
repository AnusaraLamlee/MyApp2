import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class phoneBookPage{

  contactArray = [
    {name:'Lisa',telephone:'0828267693',imageUrl:'assets/imgs/4.jpg'}
    ,{name:'Jisoo',telephone:'0822614048',imageUrl:'assets/imgs/5.jpg'}
    ,{name:'jennie',telephone:'0994813642',imageUrl:'assets/imgs/7.jpg'}
    ,{name:'Rose',telephone:'0824031541',imageUrl:'assets/imgs/8.jpg'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item);

  }

}//end class
