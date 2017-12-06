import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Paste in your credentials that you saved earlier
// 

// var firebaseConfig = {
//       apiKey: "AIzaSyBvYqCTz27L0_LmuAyWk967cBxKAG36ayQ",
//     authDomain: "mychatapp-a5937.firebaseapp.com",
//     databaseURL: "https://mychatapp-a5937.firebaseio.com",
//     projectId: "mychatapp-a5937",
//     storageBucket: "mychatapp-a5937.appspot.com",
//     messagingSenderId: "1087654963770"
// };
var firebaseConfig = {
  apiKey: "AIzaSyAkcTHbp_ioDE8iBJh9dAWAF9Q85EIdoL0",
  authDomain: "firestore-3e515.firebaseapp.com",
  databaseURL: "https://firestore-3e515.firebaseio.com",
  projectId: "firestore-3e515",
  storageBucket: "",
  messagingSenderId: "136965058683"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule                            // And this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
