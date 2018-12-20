import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DailyPage } from '../pages/daily/daily';
import { HourlyPage } from '../pages/hourly/hourly';
import { DatepickerPage } from '../pages/datepicker/datepicker';

declare var window: any;



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  public issetting:boolean=false;
  public tempUnit;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    console.log("tempunit is ",this.tempUnit);
    // used for an example of ngFor and navigation
    this.pages = [
    { title: 'Home', component: HomePage },
    { title: 'Daily Weather', component: DailyPage },
    { title: 'Hourly Weather', component: HourlyPage },
    { title: 'Select Date', component: DatepickerPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  selectTemp(tempunit:string){
    console.log("selected temprature unit is  ",tempunit);
    localStorage.setItem("tempunit",tempunit);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

  setting(){
    this.issetting=!this.issetting;

  }
}
