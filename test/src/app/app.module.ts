import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
// import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
// import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {HttpParams} from "@angular/common/http";
import { DatePipe } from '@angular/common';

// FullCalendarModule.registerPlugins([
//   dayGridPlugin,
//   interactionPlugin
// ]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

