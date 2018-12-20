import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import * as moment from 'moment';
import { WeatherProvider } from '../../providers/weather/weather';
import {fahrenheitToCelsius} from 'temperature';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';



/**
 * Generated class for the DatepickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @Component({
 	selector: 'page-datepicker',
 	templateUrl: 'datepicker.html',
 })
 export class DatepickerPage {
 	public selectedDate:any;
 	weather:any;
	dailyWeather:any;
	hourlyWeather:any;
	public loader:any;
	public today:any=[];
	public hourly:any=[];
	public locationDetails:any=[];
	public temperature:any;
	public isCel:boolean=false;
	public isFar:boolean=false;
	private longitude:any;
	private latitude:any;
	private refresher:any;
	private weeklySummry:any;

 	constructor(public navCtrl: NavController, public navParams: NavParams,private datePicker: DatePicker
 		,public weatherproviider: WeatherProvider) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad DatepickerPage');
 	}


 	selectDate(){
 		this.datePicker.show({
 			date: new Date(),
 			mode: 'date',
 			androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
 		}).then((date) => {
 			console.log('Got date: ', date);
 			this.selectedDate=date;
 			console.log('selectedDate date: ', this.selectedDate);
 			this.selectedDate=moment(date).unix();
 			this.timeMachine();
 			console.log('unix date: ', this.selectedDate);
 		}).catch((error: any) => console.log(error));
 	}


 	timeMachine(){
 		this.weatherproviider.timeMachine(this.selectedDate).subscribe((response)=>{
 			console.log("this.response",response);
 			this.weather=response.currently;
			this.dailyWeather=response.daily.data;
			this.today=this.dailyWeather[0];
			console.log("today weather is ",this.today);
			this.hourlyWeather=response.hourly.data;
			this.weeklySummry=response.daily.summary;
			// console.log("weather is ",this.weather);
			console.log("dailyWeather is ",this.dailyWeather);
			console.log("hourlyWeather is ",this.hourlyWeather);
			// console.log("temprature is :",this.weather.temperature);
			this.temperature = Math.round(fahrenheitToCelsius(this.weather.temperature));
			var day = moment.unix(this.weather.time);
			console.log("time is ",day);
			this.loader.dismiss();

 		})
 	}



 }
