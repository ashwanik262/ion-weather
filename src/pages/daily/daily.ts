import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DailyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-daily',
  templateUrl: 'daily.html',
})
export class DailyPage {
	public dailyDetails:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.dailyDetails=navParams.get('dailydata');
  	console.log("this.dailyDetails ",this.dailyDetails);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyPage');
  }

}
