import { Component } from '@angular/core';
import { NavController,LoadingController  } from 'ionic-angular';
import { DailyPage } from '../../pages/daily/daily';
import { HourlyPage } from '../../pages/hourly/hourly';

import { WeatherProvider } from '../../providers/weather/weather';
import {fahrenheitToCelsius} from 'temperature';
import * as moment from 'moment';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	weather:any;
	dailyWeather:any;
	hourlyWeather:any;
	public loader:any;
	public daily:any=[];
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

	constructor(public navCtrl: NavController,public weatherproviider: WeatherProvider,public loadingCtrl: LoadingController
		,private geolocation: Geolocation,private nativeGeocoder: NativeGeocoder) {

	}


	ionViewWillEnter() {
		this.getPosiition();
		
	}

	getPosiition(){
		this.presentLoading();
		this.geolocation.getCurrentPosition().then((resp) => {
			console.log("resp is",resp);
			this.longitude=resp.coords.longitude;
			this.latitude=resp.coords.latitude;
			this.getLocationName();
			this.weatherData();
			if (this.refresher) {
				this.refresher.complete();
				this.refresher = null;
			}
			console.log("longitude",this.longitude);
			console.log("latitude",this.latitude);
		}).catch((error) => {
			console.log('Error getting location', error);
		});

		let watch = this.geolocation.watchPosition();
		watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
 /*console.log("latitude is :",data.coords.latitude);
 console.log("longitude is :",data.coords.longitude);*/
});
	}

	getLocationName(){
		let options: NativeGeocoderOptions = {
			useLocale: true,
			maxResults: 5
		};

		this.nativeGeocoder.reverseGeocode(this.latitude, this.longitude, options)
		.then((result: NativeGeocoderReverseResult[]) =>{
			console.log("location name is : ==>",JSON.stringify(result[0]))
			this.locationDetails=result[0];
			console.log("this.locationDetails: ",this.locationDetails)

		}).catch((error: any) => console.log(error));
	}
	convert(){
		this.isCel=!this.isCel;

	}

	weatherData(){
		
		this.weatherproviider.getweather(this.longitude,this.latitude).subscribe((response) => 
		{
			// console.log("response is ",response);
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


		}, (error) => {
			console.log(error);
			this.loader.dismiss();
		})        
	}


	dailyWeatherData(){
		this.navCtrl.push(DailyPage,{dailydata:this.dailyWeather})

	}

	hourlyWeatherData(){
		this.navCtrl.push(HourlyPage,{hourlydata:this.hourlyWeather})

	}

	presentLoading() {
		this.loader = this.loadingCtrl.create({
			content: "Please wait...",
			duration: 3000
		});
		this.loader.present();
	}

	doRefresh(refresher) {
		if (refresher !== null) {
			this.refresher = refresher;
		}
		this.getPosiition();
	}


}
