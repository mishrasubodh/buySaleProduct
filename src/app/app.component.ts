import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import 'firebase/firestore';
import {environment} from '../environments/environment'


const config = {
  apiKey: "AIzaSyA0qXTFAWHRUKkP8kYjFSJcUW-KC0kLkis",
  authDomain: "buysell-f70a7.firebaseapp.com",
  databaseURL: "https://buysell-f70a7.firebaseio.com",
  projectId: "buysell-f70a7",
  storageBucket: "buysell-f70a7.appspot.com",
  messagingSenderId: "163363424062",
  appId: "1:163363424062:web:035651d5751428518d8e6f",
  measurementId: "G-FWCG1B9W4M"
};


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'todays deal',
      url: './home',
      icon: 'home'
    },
    {
      title: 'sale item  ',
      url: './salegrosary',
      icon: 'create'
    },
   
  ]
  constructor( 
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    
    
  ) {
    this.initializeApp();
  }

  initializeApp() { 
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
