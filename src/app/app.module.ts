import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DailyPage } from '../pages/daily/daily';
import { HourlyPage } from '../pages/hourly/hourly';
import { DatepickerPage } from '../pages/datepicker/datepicker';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { DatePicker } from '@ionic-native/date-picker';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { WeatherProvider } from '../providers/weather/weather';
import { HttpModule } from '@angular/http';

//pipes
import {UtcTimePipe} from "../pipes/utc-time/utc-time";
import {CelciusPipe} from "../pipes/celcius/celcius";
import {D2dPipe} from "../pipes/d2d/d2d";


@NgModule({
  declarations: [
  MyApp,
  HomePage,
  ListPage,
  DailyPage,
  HourlyPage,
  DatepickerPage,
  UtcTimePipe,
  CelciusPipe,
  D2dPipe
  ],
  imports: [
  BrowserModule,
  HttpModule,
  IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  HomePage,
  HourlyPage,
  DatepickerPage,
  ListPage,
  DailyPage
  ],
  providers: [
  StatusBar,
  SplashScreen,
  Geolocation,
  NativeGeocoder,
  DatePicker, 
  {provide: ErrorHandler, useClass: IonicErrorHandler},
  WeatherProvider
  ]
})
export class AppModule {}
