import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import 'rxjs/add/operator/share';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable, Observer } from 'rxjs/Rx';
import { Geolocation } from '@ionic-native/geolocation';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class WeatherProvider {
    private url:string="https://api.darksky.net/forecast/";
  	private machineUrl:string="https://api.darksky.net/forecast/";
  	private key:string="653972b2cdba249e4fb9c8d1d40d2874/";
  	private longitude:any;
  	private latitude:any;

  	constructor(public http: Http,private geolocation: Geolocation) {
  		console.log('Hello WeatherProvider Provider');
  	}

  	

  	public getweather(longitude:any,latitude:any){
      this.longitude=longitude;
      this.latitude=latitude;
  		
  		// this.getPosiition();
  		return this.http.get(this.url+this.key+latitude+","+longitude)
  		.map((res:Response) => res.json())
  		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  	}


    public timeMachine(time:any){
      
      // this.getPosiition();
      return this.http.get(this.machineUrl+this.key+this.latitude+","+this.longitude+","+time)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


  }
