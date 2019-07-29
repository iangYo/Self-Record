import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { config, from } from 'rxjs';

var firebaseConfig = {
  apiKey: "AIzaSyAb6EA1G27QgjZYxLiIEOWKsVfEPjfeS9Y",
  authDomain: "selfrecord-e8f4a.firebaseapp.com",
  databaseURL: "https://selfrecord-e8f4a.firebaseio.com",
  projectId: "selfrecord-e8f4a",
  storageBucket: "selfrecord-e8f4a.appspot.com",
  messagingSenderId: "45554263441",
  appId: "1:45554263441:web:6368fd8f84986192"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    AngularFirestoreModule,
    AngularFireAuthModule,
  AngularFireModule.initializeApp(firebaseConfig)],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
