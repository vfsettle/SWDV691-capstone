//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Ionic Native
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

//PantryServices Layers
import { PantryDataService } from './pantry-data.service'; 
import { PantryDialogueService } from '././pantry-dialogue.service';
import { TabsPage } from './tabs/tabs.page';
import { Tab1Page } from './tab1/tab1.page';
import { Tab2Page } from './tab2/tab2.page';
import { Tab3Page } from './tab3/tab3.page';
import { AppPage } from 'e2e/src/app.po';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppPage,
    TabsPage,
    Tab1Page,
    Tab2Page,
    Tab3Page 
  ],

  imports: [
    BrowserModule, 
    HttpClientModule,
    IonicModule.forRoot(), 
    AppRoutingModule
  ],

  bootstrap: [AppComponent],
  entryComponents: [
    AppPage,
    TabsPage,
    Tab1Page,
    Tab2Page,
    Tab3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PantryDataService,
    PantryDialogueService,
    SocialSharing,
    Camera
  ]
})
export class AppModule {}
