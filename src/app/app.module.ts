import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StartMenuComponent } from './start-menu/start-menu.component';
import { FlorenceComponent } from './Cities/Florence/History/florence.component';
import { GuidesComponent } from './Cities/guides.component';
import { ImageComponent } from './Elements/image/image.component';
import { FlorenceFactsComponent } from './Cities/Florence/Facts/florence-facts.component';
import { FlorenceEntertainmentComponent } from './Cities/Florence/Entertainment/florence-entertainment.component';
import { FlorenceFoodComponent } from './Cities/Florence/Food/florence-food.component';
import { NavigateButtonComponent } from './Elements/navigate-button/navigate-button.component';
import { MatButtonModule } from '@angular/material/button';
import { NavigationComponent } from './navigation/navigation.component';
import { PisaEntertainmentComponent } from './Cities/Pisa/Entertainment/pisa-entertainment.component';
import { PisaFactsComponent } from './Cities/Pisa/Facts/pisa-facts.component';
import { PisaFoodComponent } from './Cities/Pisa/Food/pisa-food.component';
import { PisaHistoryComponent } from './Cities/Pisa/History/pisa-history.component';

@NgModule({
  declarations: [
    AppComponent,
    FlorenceComponent,
    GuidesComponent,
    StartMenuComponent,
    ImageComponent,
    FlorenceFactsComponent,
    FlorenceEntertainmentComponent,
    FlorenceFoodComponent,
    NavigateButtonComponent,
    NavigationComponent,
    PisaEntertainmentComponent,
    PisaFactsComponent,
    PisaFoodComponent,
    PisaHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    FlexLayoutModule,
    MatRippleModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
