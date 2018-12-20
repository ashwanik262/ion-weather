import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HourlyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @Component({
 	selector: 'page-hourly',
 	templateUrl: 'hourly.html',
 })
 export class HourlyPage {
 	public hourlyDetails:any=[];

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 		this.hourlyDetails=navParams.get('hourlydata');
 		console.log("this.dailyDetails ",this.hourlyDetails);
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad HourlyPage');
 	}

 }
