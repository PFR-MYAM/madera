import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { DevisListPage } from "../pages/devis-list/devis-list";
import { DevisFormPage } from "../pages/devis-form/devis-form";

import { UserProvider } from '../providers/user/user';
import { DevisProvider } from '../providers/devis/devis';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    DevisListPage,
    DevisFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    DevisListPage,
    DevisFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    DevisProvider
  ]
})
export class AppModule {}
